<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>上传图片 </title>
<link href="i_include/style.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="allBox">
  <div id="picBox">
    <div id="picViewOuter" style="height:255px">
<?php

//拟用户名
$username=NULL;

//站点网址
$web['sitehttp']='http://'.(!empty($_SERVER['HTTP_X_FORWARDED_HOST'])?$_SERVER['HTTP_X_FORWARDED_HOST']:$_SERVER['HTTP_HOST']).'/';

//时区
$web['time_pos']=8;

//图片路径
$web['img_up_dir']='i_upload';

//截图类型（限jpg、gif、png）
$web['img_up_format']='jpg';

//截图质量（限jpg、70-100，100为最好质量）
$web['img_up_quality']=80;

//源图命名（应用于论坛等程序时可以用会员名编码命名）
$web['img_name_b']=$_COOKIE['uid'];
//截图命名
$web['img_name_s']=''.$web['img_name_b'].'_small';
//上传最大尺寸（KB）
$web['max_file_size'][15]=200;










if(strpos($_SERVER['HTTP_REFERER'],$web['sitehttp'])!==0){
  err('禁止本站外提交！');
}
//本机上传
if($_POST['ptype']==1){
  if(is_array($_FILES['purl1']) && $_FILES['purl1']['size']){
    if(!file_exists($web['img_up_dir']) && !@mkdir($web['img_up_dir'])){
      err('图片无法上传，上传目录'.$web['img_up_dir'].'不存在！');
    }else{
      @chmod($web['img_up_dir'],0777);
      $inis = ini_get_all();
      $uploadmax=$inis['upload_max_filesize'];
      if($_FILES['purl1']['size']>$web['max_file_size'][15]*1024){
        err('图片上传不成功！上传的文件请小于'.$web['max_file_size'][15].'KB！');
      }else{
        if(!preg_match('/\.(jpg|gif|png)$/i',$_FILES['purl1']['name'],$matches)){
          err('图片上传不成功！请选择一个有效的文件：允许的格式有（jpg|gif|png）！');
        }else{
          $t=strtolower($matches[1]);
          if(@move_uploaded_file($_FILES['purl1']['tmp_name'],$web['img_up_dir'].'/'.$web['img_name_b'].'.'.$t)){
            fsetcookie($web['img_up_dir'].'/'.$web['img_name_b'].'.'.$t);
            alert('图片上传成功！','main.html');
	      }else{
            err('图片上传不成功！');
	      }
		}
	  }
	}
  }else{
    err('图片不存在！请选择正确的路径！');
  }


//网络图片
}elseif($_POST['ptype']==2){
  $filename=$_POST['purl2'];
  if($filename=='' || !preg_match('/^https?:\/\/.+\.(jpg|gif|png)$/i',$filename,$matches)){
    err('图片URL输入不合法！网址以http://开头！图片格式限(jpg|gif|png)。');
  }
  if(!$im=@file_get_contents($filename)){
    err('无法获取此图片！请确定图片URL正确。');
  }
  if(strlen($im)>200*1024){
    err('图片上传不成功！链接的文件请小于'.$web['max_file_size'][15].'KB！');
  }
  $t=strtolower($matches[1]);
  write_file($web['img_up_dir'].'/'.$web['img_name_b'].'.'.$t,$im);
  fsetcookie($web['img_up_dir'].'/'.$web['img_name_b'].'.'.$t);
  alert('头像上传成功！','main.html');


//截图
}elseif($_POST['ptype']==4){
  if(extension_loaded('gd')){
    if(!function_exists('gd_info')){
      err('重要提示：你的gd版本很低，图片处理功能可能受到约束！');
    }
  }else{
    err('重要提示：你尚未加载gd库，图片处理功能可能受到约束！');
  }
  $cimg_o=$_COOKIE['162100screenshotsImg'];
  $cimg_b=typeto($cimg_o,$web['img_up_format']);
  $cimg_m=$web['img_up_dir'].'/162100screenshots_middle.'.$web['img_up_format'];
  $cimg_s=$web['img_up_dir'].'/'.$web['img_name_s'].'.'.$web['img_up_format'];
  $cimg_s2=$web['img_up_dir'].'/'.$web['img_name_s'].'_2.'.$web['img_up_format'];
  if(run_img_resize($cimg_b,$cimg_m,0,0,$_POST['noww'],$_POST['nowh'],false,false,$web['img_up_quality']) && 
  run_img_resize($cimg_m,$cimg_s,$_POST['px'],$_POST['py'],$_POST['pw'],$_POST['ph'],$_POST['pw'],$_POST['ph'],$web['img_up_quality'])&&run_img_resize($cimg_m,$cimg_s2,$_POST['px'],$_POST['py'],64,64,$_POST['pw'],$_POST['ph'],$web['img_up_quality'])){
    @unlink($cimg_m);
    if($cimg_o!=$cimg_b){
      @unlink($cimg_b);
    }
    $ow=$_POST['pw'];
    $oh=$_POST['ph'];
    if($ow/$oh>=240/180){
      if($ow>240){
        $ow=240;
        $oh=ceil(240*$_POST['ph']/$_POST['pw']);
      }
    }else{
      if($oh>180){
        $oh=180;
        $ow=ceil(180*$_POST['pw']/$_POST['ph']);
      }
    }
    echo '<script>if(top!=self && top.document.getElementById(\'screenshotsShow\')!=null){top.document.getElementById(\'screenshotsShow\').innerHTML=\'<img src="avatar/'.$cimg_s.'" width="'.$ow.'" height="'.$oh.'" />\';}</script>';
    echo '<script>var expiration=new Date((new Date()).getTime()+1209600*1000); document.cookie="162100screenshotsImgSmall="+encodeURIComponent(\''.$cimg_s.'\')+"; expires="+expiration.toGMTString()+"; path=/;";</script>';
    err('截图成功！<div class="sword">（可点右键另存为）</div><center><a href="'.$cimg_s.'" target="_blank"><img src="'.$cimg_s.'" width="'.$ow.'" height="'.$oh.'" /></a></center>','alert');
  }else{
    err('截图失败！');
  }
}

function err($text,$bj='err'){
  die('<div class="'.$bj.'"></div>'.$text.'已上传成功,请关闭窗口</div></div></div></body></html>');
}

function alert($text,$url='i_up.php'){
  die('<div class="alert"></div>'.$text.'<script>location.href=\''.$url.'\';</script></div></div></div></body></html>');
}

//转换格式
function typeto($im,$format){
  $fr=strtolower(ltrim(strrchr($im,'.'),'.'));
  if($fr!=$format){
    if($fr=='gif'){
      $img=imagecreatefromgif($im);
    }elseif($fr=='png'){
      $img=imagecreatefrompng($im);
    }elseif($fr=='jpg'){
      $img=imagecreatefromjpeg($im);
    }
    if($format=='jpg') $f='jpeg';
    elseif($format=='png') $f='png';
    else $f='gif';
    $im=preg_replace("/\.".preg_quote($fr)."$/","",$im).".".$format;
    eval('
    if(image'.$f.'($img,$im)){
      imagedestroy($img);
    }
    ');
  }
  return $im;
}

//处理缩略图
function run_img_resize($img,$resize_img_name,$dx,$dy,$resize_width,$resize_height,$w,$h,$quality){
  $img_info=@getimagesize($img);
  $width=$img_info[0];
  $height=$img_info[1];
  $w=$w==false?$width:$w;
  $h=$h==false?$height:$h;
  switch($img_info[2]){
    case 1:
    $img=@imagecreatefromgif($img);
    break;
    case 2:
    $img=@imagecreatefromjpeg($img);
    break;
    case 3:
    $img=@imagecreatefrompng($img);
    break;
  }
  if(!$img) return false;
  if(function_exists("imagecopyresampled")){
    $resize_img=@imagecreatetruecolor($resize_width,$resize_height);
    $white=@imagecolorallocate($resize_img,255,255,255);
    @imagefilledrectangle($resize_img,0,0,$resize_width,$resize_height,$white);// 填充背景色
    @imagecopyresampled($resize_img,$img,0,0,$dx,$dy,$resize_width,$resize_height,$w,$h);
  }else{
    $resize_img=@imagecreate($resize_width,$resize_height);
    $white=@imagecolorallocate($resize_img,255,255,255);
    @imagefilledrectangle($resize_img,0,0,$resize_width,$resize_height,$white);// 填充背景色
    @imagecopyresized($resize_img,$img,0,0,$dx,$dy,$resize_width,$resize_height,$w,$h);
  }
  //if(file_exists($resize_img_name)) unlink($resize_img_name);
  switch($img_info[2]){
    case 1:
    @imagegif($resize_img,$resize_img_name);
    break;
    case 2:
    @imagejpeg($resize_img,$resize_img_name,$quality); //100质量最好，默认75
    break;
    case 3:
    @imagepng($resize_img,$resize_img_name);
    break;
  }
  @imagedestroy($resize_img);
  return true;
}

//写文件
function write_file($file,$text){
  if(!file_exists($file)){
    if(!@touch($file)){
      err('操作失败！原因分析：文件'.$file.'不存在或不可创建或读写，可能是当前运行环境权限不足');
    }
  }
  $arr_dir=@explode('/',$file);
  $dir_num=count($arr_dir);
  if($dir_num>0){
    for($i=0;$i<$dir_num;$i++){
      $the_dir=str_pad('',3*($dir_num-$i-1),'../').$arr_dir[$i];
      @chmod($the_dir,0755);
    }
  }
  @chmod($file,0755);
  if(is_writable($file) && ($fp=@fopen($file,'rb+'))){
    f_lock($fp);
    @ftruncate($fp,0);
    if(strlen($text)>0 && !@fwrite($fp,$text)){
      err('操作失败！原因分析：文件'.$file.'不存在或不可创建或读写，可能是权限不足！');
	}
    @flock($fp,LOCK_UN);
    fclose($fp);
  }else{
    err('操作失败！原因分析：文件'.$file.'不存在或不可读写');
  }
}

//锁定文件
function f_lock($fp){
  if($fp){
    if(!flock($fp,LOCK_EX)){
      sleep(1);
      f_lock($fp);
    }
  }
}

//记忆文件名
function fsetcookie($img){
  echo '<script>document.cookie="162100screenshotsImg="+encodeURIComponent(\''.$img.'\')+"; path=/;";</script>';
}

//获取ip
function user_ip(){
  global $web;
  if($_SERVER['HTTP_X_FORWARDED_FOR']){
    $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
  }elseif($_SERVER['HTTP_CLIENT_IP']){
    $ip=$_SERVER['HTTP_CLIENT_IP'];
  }elseif($_SERVER['REMOTE_ADDR']){
    $ip=$_SERVER['REMOTE_ADDR'];
  }elseif(getenv('HTTP_X_FORWARDED_FOR')){
    $ip=getenv('HTTP_X_FORWARDED_FOR');
  }elseif(getenv('HTTP_CLIENT_IP')){
    $ip=getenv('HTTP_CLIENT_IP');
  }elseif(getenv('REMOTE_ADDR')){
    $ip=getenv('REMOTE_ADDR');
  }else{
    $ip=gmdate('YmdHis',time()+(floatval($web['time_pos'])*3600));
  }
  return $ip;
}


?>
    </div>
  </div>
</div>
</body>
</html>