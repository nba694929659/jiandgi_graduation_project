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
$userinfo = USER::get('userinfo');
$SPconfig = unserialize(SPCONFIG);
?>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title><?php echo $SPconfig['title'];?>JOY NJCIT</title>
    <meta name="Keywords" content="<?php echo $SPconfig['Keywords'];?>"/>
    <meta name="Description" content="<?php echo $SPconfig['Description'];?>"/>
    <link rel="shortcut icon" href="<?php echo BASE_URL;?>favicon.ico"/>
    <link href="<?php echo BASE_URL;?>css/base.css" rel="stylesheet" type="text/css"/>
    <?php TPL::plugin('include/tophead');?>
</head>
<body>
<?php if (!file_exists('avatar/i_upload/' . $userinfo['uid'] . '_small_2.jpg')) { ?>


    <?php }?>
<?php TPL::plugin('include/header');?>
<div id='container'>

    <div id='contentre' class='content'>
        <div class='contenttop'></div>
        <div id="invite-holder">
            <div style="" id="invite-url-holder" class="invite-section">
                <div id="invite-url">
                    <h4>注册邮箱:</h4><input type="text" class="simple-input-text" id="invite-url-input" value="">
                    <span id="invite-url-tip"></span>
                </div>
            </div>
            <div style="" id="invite-email-holder" class="invite-section">

                <h4>提交注册邮箱你将会收到密码</h4>
                <div id="invite-email">
                    <a class="shadow-link" id="send-mail-btn" href="javascript:invate()">提交</a>
                    <span style="display:none;" id="send-mail-tip"></span>
                </div>
            </div>
        </div>

        <div class="clear"></div>
    </div>
</div>
<?php TPL::plugin('include/infooter2');?>
<script>
    id = 0;
    function invate() {
        id++;
        var com = $('#invite-url-input').val();
        $.ajax({
            type: "POST",
            url: "index.php?m=index.forgetpassword",
            data: "com=" + com,
            success: function(msg) {
               alert(msg);
               // $('#send-mail-btn').html(msg);
            }
        });
    }
</script>
</body>
</html>