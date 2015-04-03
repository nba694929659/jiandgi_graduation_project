<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<?php 
/*************************************************************
 * Created: 2010-4-1
 *
 * 模板 index.tpl.php
 *
 * @author chuxuwang(chuxuwang@shenpang.cc)
 **************************************************************/
$SPconfig = unserialize(SPCONFIG);
?>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title><?php echo $SPconfig['title'];?>--power by 身旁网&拍旁轻博客</title>
    <meta name="Keywords" content="<?php echo $SPconfig['Keywords'];?>"/>
    <meta name="Description" content="<?php echo $SPconfig['Description'];?>"/>
    <link rel="shortcut icon" href="<?php echo BASE_URL;?>favicon.ico"/>
    <link href="<?php echo BASE_URL;?>css/base.css" rel="stylesheet" type="text/css"/>
    <link href="<?php echo BASE_URL;?>css/edit.css" rel="stylesheet" type="text/css"/>
    <?php TPL::plugin('include/tophead');?>
</head>
<body>
<?php TPL::plugin('include/header');?>
<div id='container'>
    <img id="content_top" alt="" src="<?php echo BASE_URL;?>css/bgimg/content_top_edit_form.png?alpha">

    <div id='content' class='content'>
        <div id='right_column'>
            <?php TPL::plugin('ad/adright');?>
        </div>
        <div id='left_column' style="padding:20px;">
            <h2 id="main-title">加入身旁兴趣群</h2>

            <div class="one-position">
                <h4>身旁网官方轻博群：<a href='http://www.shenpang.cc/index.php?m=group&gid=6' target=_blank>身旁网我家</a></h4>

                <p></p>
                <h4>社交网络爱好QQ群：164381996</h4>

                <p></p>
                <h4>身旁网校园部QQ群：31356175</h4>

                <p></p>
                <h4>身旁网编辑群QQ群：31818082</h4>

                <p></p>
            </div>


        </div>
        <div class="clear"></div>
    </div>
    <img id="content_bottom" alt="" src="<?php echo BASE_URL;?>css/bgimg/content_bottom_edit_form.png?alpha">
</div>

<style>
    body {
        font-size: 16px;
    }

    h5 {
        font-weight: bold;
    }

    h2#main-title {
        color: #2D4159;
        font-size: 32px;
        margin: 0 0 30px;
    }

    .one-position {
        border-top: 1px solid #D3D5D7;
        margin-top: 20px;
    }

    .one-position h4 {
        color: #38546B;
        font-size: 22px;
        margin-top: 20px;
    }

    .one-position li {
        line-height: 20px;
        list-style: disc outside none;
        margin-left: 30px;
    }

    .one-position ul h5 {
        font-size: 14px;
        margin-bottom: 10px;
    }

    .one-position ul {
        margin-top: 20px;
    }
</style>
<?php TPL::plugin('include/infooter2');?>
</body>
</html>