<?php include_once('../login/classes/login.class.php');?>
		<meta charset="UTF-8">
		<title>Tutorials Admin</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
		
	    <!-- Loading Bootstrap -->
	    <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<script src="js/flat-ui.min.js"></script>
	    <link href="css/demo.css" rel="stylesheet">
<script>
$(".alert").hide();	
</script>
	    <!-- Loading Flat UI -->
	    <link href="css/flat-ui.css" rel="stylesheet">

<div class="container" style="padding-top: 50px;">

<div class="login">
        <div class="login-screen">
          <div class="login-icon">
            <img src="img/link-lined.png" alt="Welcome to Mail App">
            <h4>The Tutorials <small>Backend</small></h4>
          </div>
<form method="post" class="form normal-label" action="login.php">
          <div class="login-form">
            <div class="form-group">
              <input type="text" class="form-control login-field" value="" placeholder="Enter your Username" id="username" name="username">
              <label class="login-field-icon fui-user" for="login-name"></label>
            </div>

            <div class="form-group">
              <input type="password" class="form-control login-field" value="" placeholder="Password" id="password" name="password" size="30">
              <label class="login-field-icon fui-lock" for="login-pass"></label>
            </div>
			<input type="hidden" name="token" value="<?php echo $_SESSION['jigowatt']['token']; ?>"/>
			<label class="checkbox" for="checkbox1">
			            <input type="checkbox" value="" id="checkbox1" name="remember" data-toggle="checkbox" class="custom-checkbox"><span class="icons"><span class="icon-unchecked"></span><span class="icon-checked"></span></span><span style="color: grey;">Remember me.</span>
			</label>
            <input type="submit" value="<?php _e('Sign in'); ?>" class="btn btn-primary btn-lg btn-block" id="login-submit" name="login"/>

</form>
          </div>
        </div>
      </div>

</div>

<!--
<div class="row">
	<div class="main login col-md-4">
		<form method="post" class="form normal-label" action="login.php">
		<fieldset>
		<h4><?php _e('Sign in to Jigowatt'); ?></h4>
			<div class="form-group">
				<label for="username" class="login-label"><?php echo $login->use_emails ? _('Email address') : _('Username'); ?></label>
				<input class="form-control" id="username" name="username" placeholder="<?php _e('Username'); ?>" type="text"/>
				<span class="forgot"><a data-toggle="modal" href="#" data-target="#forgot-form" id="forgotlink" tabindex=-1><?php _e('Trouble signing in'); ?></a>?</span>
			</div>

			<div class="form-group">
				<label for="password" class="login-label"><?php _e('Password'); ?></label>
				<input class="form-control" id="password" name="password" size="30" placeholder="<?php _e('Password'); ?>" type="password"/>
			</div>
		</fieldset>

		<input type="hidden" name="token" value="<?php echo $_SESSION['jigowatt']['token']; ?>"/>
		<input type="submit" value="<?php _e('Sign in'); ?>" class="btn btn-default login-submit" id="login-submit" name="login"/>

		<label class="remember" for="remember">
			<input type="checkbox" id="remember" name="remember"/><span><?php _e('Stay signed in'); ?></span>
		</label>

		<p class="signup"><a href="sign_up.php"><?php _e('New to Jigowatt? <strong>Join today!</strong>'); ?></a></p>

		<?php if ( !empty($jigowatt_integration->enabledMethods) ) : ?>

		<div class="">
			<?php foreach ($jigowatt_integration->enabledMethods as $key ) : ?>
				<p><a href="login.php?login=<?php echo $key; ?>"><img src="assets/img/<?php echo $key; ?>_signin.png" alt="<?php echo $key; ?>"></a></p>
			<?php endforeach; ?>
		</div>

		<?php endif; ?>

		</form>
	</div>

</div>
-->
