<!DOCTYPE html>
<?php
/*************************************************************
 * Created: 2010-4-1
 *
 * 模板 login.tpl.php
 *
 * @author chuxuwang(chuxuwang@shenpang.cc)
 **************************************************************/
$SPconfig = unserialize(SPCONFIG);
?>
<html>

<head>

    <meta charset="UTF-8">

    <title>CodePen - Login Form</title>

    <link rel="stylesheet" href="<?php echo BASE_URL;?>html5/css/style.css">

</head>

<body>

<html lang="en-US">
<head>

    <meta charset="utf-8">

    <title>Login</title>

    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Varela+Round">

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>

<body>

<div class="container">

    <div id="login">

        <h2><span class="fontawesome-lock"></span>Sign In</h2>

        <form action="index.php?m=account.add" method="POST">

            <fieldset>

                <p><label for="email">E-mail address</label></p>
                <p><input type="email" id="email" name="mail" placeholder="mail@address.com"></p>

                <p><label for="password">密 码：</label></p>
                <p><input type="password" id="password" name="password" placeholder="password"></p>

                <p><label for="name">昵 称：</label></p>
                <p><input type="text" id="name" name="name" placeholder="password"></p>
                <p><input type="submit" value="Sing In"></p>
            </fieldset>

        </form>

    </div> <!-- end login -->

</div>
</body>
</html>

</body>

</html>