<?php
/*************************************************************
 * Created: 2010-4-1
 * 
 *序列化缓存
 * 
 * @author chuxuwang(chuxuwang@shenpang.cc)
 **************************************************************/

class serialize_cache
{
	var $baseDir	= "";
	var $pathLevel	= 3;
	var $nameLen	= 2;

	function file_cache() {

	}

	function adp_init($config=array()) {
		extract($config);
		if (isset($baseDir)){
			$this->baseDir		= $baseDir;
		}
		if (isset($pathLevel)){
			$this->pathLevel	= $pathLevel * 1 ==0 ? 3 : $pathLevel * 1;
		}
		if (isset($nameLen)){
			$this->nameLen		= $nameLen * 1 ==0 ? 2 : $nameLen * 1;
		}
	}


	function get($key, $clearStaticKey=false){
		static $data;
		// 提供给 SET 进行通知，清除静态缓存数据
		if ($clearStaticKey){
			unset($data[$key]);
			return false;
		}
				
		$p = $this->_getSavePath($key);		
		if (isset($data[$key]) && file_exists($p['p'])){
			return $data[$key];
		}

		if ( !file_exists($p['p']) ) {return false;}

                $content = IO::read($p['p']);
		$d = unserialize(preg_replace("#<\?php .*;\?>\n#sm" , "", $content));
		$d = $d[$key];
		if ( empty($d['ttl']) || $d['timeout'] > APP_LOCAL_TIMESTAMP ){
			$data[$key]=$d['data'];
			return $data[$key];
		}
		return false;
	}

	function set($key, $value, $ttl = 0) {
		$vData	= array($key => array('data' => $value, 'timeout'=> ( APP_LOCAL_TIMESTAMP + $ttl), 'ttl' => $ttl));
		$formatData = "<?php die('Permission denied');?>\n" . serialize($vData);
		$p = $this->_getSavePath($key);		
		
		//清除GET中的静态缓存数据
		$this->get($key, true);
		return IO::write($p['p'],$formatData);
	}

	function delete($key) {
		$p = $this->_getSavePath($key);
		if (file_exists($p['p'])){
			return IO::rm($p['p']);
		}
		return true;
	}

	function _getSavePath($key) {
		$sKey = $this->_getPriviteKey($key);
		$sArr = explode("\n",wordwrap(str_repeat($sKey,10), $this->nameLen, "\n", 1));
		$pArr = array_slice($sArr, 0,$this->pathLevel);
		$d = $this->baseDir.'/'.implode('/',$pArr);
		$f = $sKey.".cache.php";
		return array('f'=>$f , 'd'=>$d , 'p'=>$d.'/'.$f);
	}

	function _getPriviteKey($key){
		return md5($key);
	}
}
?>