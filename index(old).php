<?php
include_once('../login/classes/check.class.php');
protect("1");
?>
<html>
	<head>
		<link rel="stylesheet" href="css/style.css">

		<meta charset="UTF-8">
		<title>Tutorials Admin</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
		
	    <!-- Loading Bootstrap -->
	    <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<!-- 		<script src="dist/js/flat-ui.min.js"></script> -->
		
	    <!-- Loading Flat UI -->
	    <link href="css/flat-ui.css" rel="stylesheet">
		<script src="js/script.js"></script>


	</head>
	<body>
		<div class="container" style="padding-top: 10px;">
			<nav class="navbar navbar-default" role="navigation">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<a class="navbar-brand" href="#">Tutorials Admin</a>
				</div>
			
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="navbar-collapse-3">
					<ul class="nav navbar-nav">
						<li><a href="#">Links<!-- <span class="navbar-unread">1</span> --></a></li>
<!--
						<li class="active"><a href="#">About Us</a></li>
						<li><a href="#">Clients</a></li>
-->
					</ul>
<!--
					<form class="navbar-form navbar-left" action="#" role="search">
						<div class="form-group">
							<div class="input-group">
								<input class="form-control" id="navbarInput-01" type="search" placeholder="Search">
								<span class="input-group-btn">
									<button type="submit" class="btn"><span class="fui-search"></span></button>
								</span>
							</div>
						</div>
					</form>
-->
<script>
		/* When the user clicks on the button, 
	toggle between hiding and showing the dropdown content */
	function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
	}

	// Close the dropdown menu if the user clicks outside of it
	window.onclick = function(event) {
		if (!event.target.matches('.dropdown-toggle')) {

			var dropdowns = document.getElementsByClassName("dropdown-menu");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}

</script>
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a href="#" onclick="myFunction()" class="dropdown-toggle" data-toggle="dropdown">Admin <b class="caret"></b></a>
							<ul id="myDropdown" class="dropdown-menu">
								<li><a href="../login/admin/settings.php">Settings</a></li>
								<li><a href="../login/admin/index.php">Users</a></li>
								<li class="divider"></li>
								<li><a href="../login/logout.php">Logout</a></li>
							</ul>
						</li>
<!-- 						<li class="btn btn-success">Sign in</li> -->
    
						<li><a href="../login/admin/settings.php"><span class="visible-sm visible-xs">Settings<span class="fui-gear"></span></span><span class="visible-md visible-lg"><span class="fui-gear"></span></span></a></li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</nav>

<div class="well">

<div id="dialog-confirm-delete" title="Delete link?">
  <p><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span>Are you sure you want to delete this link?</p>
</div>
<div id="dialog-confirm-delete-category" title="Delete link?">
  <p><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span>Are you sure you want to delete this category?</p>
</div>

<div id="dialog" title="Alert!">
</div>

<div id="addCatDialog" title="Add Category">
    <strong>Add Category</strong>
    <form id="add_cat">
    Parent category:<br />
    <select class="catOption">

    </select><br />
    Name:<br />
    <input type="text" name="category" id="category_val" />
    <input type="submit" />
    </form>
</div>

<div id="addLinkDialog" title="Add Link">
    <strong>Add Link</strong>
    <form id="add_link">
    Parent category:<br />
    <select class="catOption" name="parent">

    </select><br />
    Title:<br />
    <input type="text" name="title" id="url_title" /><br />
    Description:<br />
    <textarea name="description"></textarea><br />
    URL:</br />
    <input type="text" name="url" id="url_url" />
    <input type="submit" />
    </form>

</div>


<div class="row" id="content">
	<input style="width: 150px; display: inline;" class="btn btn-block btn-lg btn-primary" type="button" value="Add Category" id="addCatBtn">
	<input style="width: 120px; display: inline; margin-bottom: 5px;" type="button" class="btn btn-block btn-lg btn-primary" value="Add Link" id="addLinkBtn" />
<div id="cats">


<div class="cats">
</div>
			</div>
		</div>
	    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

<!-- 		<script src="dist/js/vendor/jquery.min.js"></script> -->
		<!-- Include all compiled plugins (below), or include individual files as needed -->
<!--     <script src="js/application.js"></script> -->
	</body>
</html>
