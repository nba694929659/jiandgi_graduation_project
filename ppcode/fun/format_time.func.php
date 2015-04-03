<?php
/*************************************************************
 * Created: 2010-4-1
 * 
 * 时间格式文件
 * 
 * @author chuxuwang(chuxuwang@shenpang.cc)
 **************************************************************/

/**
 * format time
 *
 * @param string $time 发微博的时间
 * @return string
 */
function format_time($time)
{
	if (empty($time)) {
		return $time;
	}

	if (PHP_VERSION < 5) {
		$matchs = array();
		preg_match_all('/(\S+)/', $time, $matchs);
		if ($matchs[0]) {
			$Mtom=array('Jan' => '01',
						'Feb' => '02',
						'Mar' => '03',
						'Apr' => '04',
						'May' => '05',
						'Jun' => '06',
						'Jul' => '07',
						'Aug' => '08',
						'Sep' => '09',
						'Oct' => '10',
						'Nov' => '11',
						'Dec' => '12');
			$time = $matchs[0][5].$Mtom[$matchs[0][1]].$matchs[0][2].' '.$matchs[0][3];
		}
	}

	$t = strtotime($time);

	$differ = APP_LOCAL_TIMESTAMP - $t;

	$year = date('Y', APP_LOCAL_TIMESTAMP);

	if (($year % 4) == 0 && ($year % 100) > 0) {
		//闰年
		$days = 366;
	} elseif (($year % 100) == 0 && ($year % 400) == 0) {
		//闰年
		$days = 366;
	} else {
		$days = 365;
	}

	if ($differ <= 60) {
		//小于1分钟
		if ($differ <= 0) {
			$differ = 1;
		}
		$format_time = sprintf('%d秒前', $differ);
	} elseif ($differ > 60 && $differ <= 60 * 60) {
		//大于1分钟小于1小时
		$min = floor($differ / 60);
		$format_time = sprintf('%d分钟前', $min);
	} elseif ($differ > 60 * 60 && $differ <= 60 * 60 * 24) {
		if (date('Y-m-d', APP_LOCAL_TIMESTAMP) == date('Y-m-d', $t)) {
			//大于1小时小于当天
			$format_time = sprintf('今天 %s', date('H:i', $t));
		} else {
			//大于1小时小于24小时
			$format_time = sprintf('%s月%s日 %s', date('n', $t), date('j', $t), date('H:i', $t));
		}
	} elseif ($differ > 60 * 60 * 24 && $differ <= 60 * 60 * 24 * $days) {
		if (date('Y', APP_LOCAL_TIMESTAMP) == date('Y', $t)) {
			//大于当天小于当年
			$format_time = sprintf('%s月%s日 %s', date('n', $t), date('j', $t), date('H:i', $t));
		} else {
			//大于当天不是当年
			$format_time = sprintf('%s年%s月%s日 %s', date('Y', $t), date('n', $t), date('j', $t), date('H:i', $t));
		}
	} else {
		//大于今年
		$format_time = sprintf('%s年%s月%s日 %s', date('Y', $t), date('n', $t), date('j', $t), date('H:i', $t));
	}
	return $format_time;
}
