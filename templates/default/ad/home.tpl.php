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
            <h2 id="main-title">身旁网的家：追求，团结，轻松，自由</h2>

            <div class="one-position">
                <h4>身旁网家的温馨：虽小却很温馨</h4>
                <img width="540px" style="margin-top:20px;padding:2px;border:1px solid #616161"
                     src="<?php echo BASE_URL;?>ad/img/1.jpg"></img>

                <p>大大，舒服的沙发</p>
                <img width="540px" style="margin-top:20px;padding:2px;border:1px solid #616161"
                     src="<?php echo BASE_URL;?>ad/img/2.jpg"></img>

                <p>身旁网的全景，虽小却很整洁</p>
                <img width="540px" style="margin-top:20px;padding:2px;border:1px solid #616161"
                     src="<?php echo BASE_URL;?>ad/img/3.jpg"></img>

                <p>身旁网的办公区</p>
                <img width="540px" style="margin-top:20px;padding:2px;border:1px solid #616161"
                     src="<?php echo BASE_URL;?>ad/img/4.jpg"></img>

                <p>小小书柜，对知识的追求</p>
                <h4>联系地址：广州天河棠东brt站泓亿商务中心A515</h4>

                <p></p>
                <img width="360px" style="margin-top:20px;padding:2px;border:1px solid #616161"
                     src="<?php echo BASE_URL;?>ad/img/map.jpg"></img>

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