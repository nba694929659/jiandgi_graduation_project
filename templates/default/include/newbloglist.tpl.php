<?php
/*************************************************************
 * Created: 2010-4-1
 *
 * 模板 input.tpl.php
 *
 * @author chuxuwang(chuxuwang@shenpang.cc)
 **************************************************************/
$userinfo = USER::get('userinfo');
$cid = V('g:id');
if ($cid) $userinfo['uid'] = $cid;
$page = V('g:page');
if (!$page) $page = 1;
$sum = 20;
$total = ($page - 1) * $sum;
$db = APP :: ADP('db');
$rows = $db->query('select count(uid) as count from ' . $db->getTable(T_USERS) . '  order by uid desc limit 100');
$allcount = $rows[0]['count'];
$sql = 'select *,x.name as name,x.uid as uid,y.uid as yuid from ' . $db->getTable(T_USERS) . ' x  left join  ' . $db->getTable(T_FOLLOWS) . '  y on x.uid=y.guid and y.uid=' . $userinfo['uid'] . ' order by x.uid desc limit ' . $total . ',' . $sum;
if ($fresults = CACHE::get(md5($sql))) {
} else {
    $fresults = $db->query('select *,x.name as name,x.uid as uid,y.uid as yuid from ' . $db->getTable(T_USERS) . ' x  left join  ' . $db->getTable(T_FOLLOWS) . '  y on x.uid=y.guid and y.uid=' . $userinfo['uid'] . ' order by x.uid desc limit ' . $total . ',' . $sum);
    CACHE::set(md5($sql), $fresults, 300);
}
?>
<style type="text/css">
    <!--
    body {
        behavior: url(images/iehoverfix.htc);
    }

    .user_photo {
        width: 75px;
    }

    .user_photo .photo_img {
        display: block;
        width: 62px;
        height: 62px;
        border-radius: 6px;
        -moz-border-radius: 6px;
        -khtml-border-radius: 6px;
        -webkit-border-radius: 6px;
    }

    -->
</style>
<div class="wrapper clearfix">
    <div class="user_photo"><a class="photo_img"
                               style="background:url('<?php if (file_exists('avatar/i_upload/' . $userinfo['uid'] . '_small_2.jpg')) {
                                   echo   BASE_URL . 'avatar/i_upload/' . $userinfo['uid'] . '_small_2.jpg?id=' . rand(1110, 9900);
                               } else if (file_exists('avatar/i_upload/' . $userinfo['uid'] . '_small.jpg')) {
                                   echo   BASE_URL . 'avatar/i_upload/' . $userinfo['uid'] . '_small.jpg';
                               } else {
                                   echo  BASE_URL . 'css/bgimg/default_avatar_64.gif';
                               }?>') no-repeat" href="index.php?m=ta&uid=<?php echo $userinfo['uid'];?>"
                               title="<?php echo $userinfo['name'];?>"></a></div>
    <div class="c_box">
        <div class="c_b_t"></div>
        <div class="c_b_c clearfix">
            <!-- 子导航 -->
            <div class="sub_nav">
                <li><a href="<?php if (PPREWRITE == 1) {
                    echo BASE_URL; ?>m.post.text<?php } else { ?>index.php?m=post.text<?php }?>" title="文本"><img
                        src="<?php echo BASE_URL;?>css/newimage/images/icon_01.png" alt="文本"/></a></li>
                <li><a href="<?php if (PPREWRITE == 1) {
                    echo BASE_URL; ?>m.post.photo<?php } else { ?>index.php?m=post.photo<?php }?>" title="图片"><img
                        src="<?php echo BASE_URL;?>css/newimage/images/icon_03.png" alt="图片"/></a></li>
                <li><a href="<?php if (PPREWRITE == 1) {
                    echo BASE_URL; ?>m.post.audio<?php } else { ?>index.php?m=post.audio<?php }?>" title="音乐"><img
                        src="<?php echo BASE_URL;?>css/newimage/images/icon_11.png" alt="音乐"/></a></li>
                <li><a href="<?php if (PPREWRITE == 1) {
                    echo BASE_URL; ?>m.post.video<?php } else { ?>index.php?m=post.video<?php }?>" title="视频"><img
                        src="<?php echo BASE_URL;?>css/newimage/images/icon_13.png" alt="视频"/></a></li>
            </div>
        </div>
        <div class="c_b_b"></div>
        <div class="c_b_arrow"></div>
    </div>
</div>
<?php
if ($allcount > 0) {
    ?>
<div class='clist'>
    <div class='tagtitle'>
        <span style='font-size:18px;font-weight:bold;'>新进轻博客</span>
    </div>

    <?php   foreach ($fresults as $gkey => $fvalue) { ?>
    <div class="wrapper postwrap clearfix" id='postother'>
        <div class="user_photo"></div>

        <div class="c_box">
            <div class="c_b_t"></div>
            <div class="c_b_c clearfix">
                <div style='margin:8px;padding:4px;'>
                    <div style='float:left;width:80px;'><img style='padding:2px;border:1px solid #919191'
                                                             src='<?php if (file_exists('avatar/i_upload/' . $fvalue['uid'] . '_small_2.jpg')) {
                                                                 echo BASE_URL . '/avatar/i_upload/' . $fvalue['uid'] . '_small_2.jpg';
                                                             } else  if (file_exists('avatar/i_upload/' . $fvalue['uid'] . '_small.jpg')) {
                                                                 echo BASE_URL . '/avatar/i_upload/' . $fvalue['uid'] . '_small.jpg';
                                                             } else {
                                                                 echo  BASE_URL . 'css/bgimg/default_avatar_64.gif';
                                                             }?>' width='64px'></img></div>
                    <div style='float:right:width:400px;'><a
                            href='index.php?m=ta&uid=<?php echo $fvalue['uid'];?>'><?php echo $fvalue['name'];?></a> <a
                            title="查看" href='index.php?m=ta&uid=<?php echo $fvalue['uid'];?>'><img style='border:0px'
                                                                                                   src='css/bgimg/look.gif'></img></a>
<span id='tafol<?php echo  $fvalue['uid'];?>'>
 <?php if (!$fvalue['yuid']) { ?>
    <a style="margin:4px; color:#313131;" href='javascript:tafollow(<?php  echo $fvalue['uid'];?>)'>欣赏TA</a>
    <?php } else { ?>
    <a style="margin:4px; color:#313131;" href='javascript:tadelfollow(<?php  echo $fvalue['uid'];?>)'>取消</a>
    <?php } ?>
 </span>

                        <p>
                        <hr>
                        <p></p>
                            <?php if ($fvalue['descs']) {
                            echo $fvalue['descs'];
                        } else {
                            echo '这个家伙很懒,还没有任何描述!';
                        }?></p>

                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>

            <div class="c_b_b"></div>


        </div>
    </div>
    <?php }?>


</div>
<?php } ?>
<?php $theurl = "index.php?m=index.newblog&page";
if ($cid) $theurl = "index.php?m=ta.tafollow&id" . $cid;

if (PPREWRITE == 1) {
    $theurl = BASE_URL . "m.index.newblog?page";
    if ($cid) $theurl = BASE_URL . "m.ta.tafollow?id" . $cid . "&page";

}
?>
<div class="pages">
<?php
$addtype = '';
    $pages = APP::N('pages', 20, $allcount, $page, $theurl); // 创建对象
    $pages->setShowPageNum(5);     // 设置显示的页数
    $pages->setCurrentIndexPage(3);   // 设置当前页在分页栏中的位置
    $pages->setFirstPageText('<<');   // 设置链接第一页显示的文字
    $pages->setLastPageText('>>');    //  设置链接最后一页显示的文字
    $pages->setPrePageText('<');   //   设置链接上一页显示的文字
    $pages->setNextPageText('>');  //    设置链接下一页显示的文字
    $pages->setPageCss('pagea');        //设置各分页码css样式的class名称
    $pages->setCurrentPageCss('current');   // 设置当前页码css样式的class名称
//$pages->setPageStyle('pagea');      设置各分页码的样式，即style属性
//$pages->setCurrentPageStyle($style);  设置当前页码的样式，即style属性
    $pages->setLinkSymbol('=');       // 设置地址链接中页码与变量的连接符，如page=2中的“=”
    $pages->isShowFirstAndLast(true); //   设置是否显示第一页与最后一页的链接
    echo  $pages->generatePages();

    ?>
</div>
<script>
    function tafollow(uid) {
        $.ajax({
            type: "POST",
            url: "index.php?m=ta.ajaxfollow",
            data: "uid=" + uid,
            success: function(msg) {
                $('#tafol' + uid).html('<a style="margin:4px; color:#313131;"  href="javascript:tadelfollow(' + uid + ')">取消欣赏</a>');
            }
        });

    }

    function tadelfollow(uid) {

        $.ajax({
            type: "POST",
            url: "index.php?m=ta.ajaxdelfollow",
            data: "uid=" + uid,
            success: function(msg) {
                $('#tafol' + uid).html('<a style="margin:4px; color:#313131;"  href="javascript:tafollow(' + uid + ')">欣赏他（她）</a>');
            }
        });


    }
</script>
      