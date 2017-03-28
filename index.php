<?php
include_once('../login/classes/check.class.php');
protect("1");
?>
<html>
	<head>
		<link rel="stylesheet" href="css/style.css">
		<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css" rel="stylesheet" />

		<meta charset="UTF-8">
		<title>Tutorials Admin</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		
	    <!-- Loading Bootstrap -->
	    <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<!-- 		<script src="js/bootstrap.min.js"></script> -->
		<script src="js/flat-ui.min.js"></script>
		
	    <!-- Loading Flat UI -->
	    <link href="css/flat-ui.css" rel="stylesheet">
<!-- 		<script src="js/script1.js"></script> -->
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
<!-- Modal -->
<div class="modal fade" id="modal-confirm-delete-link" tabindex="-1" role="dialog" aria-labelledby="dialog-confirm-delete-label">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Delete</h4>
      </div>
      <div class="modal-body">
	  	<p><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span>Are you sure you want to delete this link?</p>

      </div>
      <div class="modal-footer">
        <button id="confirm-delete-link-btn" class="btn btn-block btn-lg btn-danger">Delete</button>
        <button id="close-delete-link-btn" type="button" class="btn btn-block btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modal-edit-cat" tabindex="-1" role="dialog" aria-labelledby="model-edit-cat-label">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Edit Category</h4>
      </div>
      <div class="modal-body">

	  	<p><span class="ui-icon ui-icon-alert" style="float:left;"></span>Category Name</p>
	  	<input type="text" style="margin-bottom: 30px;" class="form-control login-field" name="edit-category" id="edit-category_val" />
	  	
	  	<p><span class="ui-icon ui-icon-alert" style="float:left;"></span>Category Location</p>

	  	
			    <select style="margin-bottom: 20;" class="catEditOption">
			
			    </select><br />

	  	
	      <select class="form-control select select-primary catEditOption" data-toggle="select">
	        <option value="1" selected>Top Level</option>
	      </select>

      </div>
      <div class="modal-footer">
        <button id="confirm-update-cat-btn" class="btn btn-block btn-lg btn-success">Update</button>
        <button id="close-update-cat-btn" type="button" class="btn btn-block btn-default" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modal-confirm-delete-category" tabindex="-1" role="dialog" aria-labelledby="dialog-confirm-delete-category-label">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Delete</h4>
      </div>
      <div class="modal-body">
		  <div id="cat-with-children" class="hide alert alert-danger" style="text-align: center;">
		    <strong>Danger!</strong> <br>This category has children. <br>It cannot be deleted<a href="#" class="alert-link"></a>
		  </div>

	  	<p id="delete-msg"><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span>Are you sure you want to delete this category?</p>

      </div>
      <div class="modal-footer">
        <button id="confirm-delete-category-btn" class="btn btn-block btn-lg btn-danger">Delete</button>
        <button id="close-delete-category-btn" type="button" class="btn btn-block btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div id="dialog" title="Alert!">
</div>

<!-- Modal -->
<div class="modal fade" id="addCatDialog" tabindex="-1" role="dialog" aria-labelledby="addCatDialogLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Add Category</h4>
      </div>
      <div class="modal-body">
		<form id="add_cat">
			Parent category:<br />
			<select class="catOption">
			
			</select><br />
			Name:<br />
			<input type="text" class="form-control login-field" name="category" id="category_val" />

      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <input type="submit" class="btn btn-primary" value="Add Category">
	      </div>
	  </form>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="addLinkDialog" tabindex="-1" role="dialog" aria-labelledby="addLinkDialogLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Add Link</h4>
      </div>
	  <form id="add_link">
	      <div class="modal-body">
		      <div style="padding-bottom: 25px;" >
			      
				    Parent category:<br />
				    <select style="margin-bottom: 20;" class="catOption" name="parent">
				
				    </select><br />
				    Title:<br />
				    <input class="form-control text-field" type="text" name="title" id="url_title" /><br />
				    Description:<br />
				    <textarea class="form-control text-field" name="description"></textarea><br />
				    URL:</br />
				    <input class="form-control text-field" type="text" name="url" id="url_url" />
		      </div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <input type="submit" class="btn btn-primary" value="Add Link">
	      </div>
	  </form>
    </div>
  </div>
</div>

<div class="row" id="content">
	<input style="width: 150px; display: inline;" class="btn btn-block btn-lg btn-primary" type="button" data-toggle="modal" data-target="#addCatDialog" value="Add Category" id="addCatBtn">
	<input style="width: 120px; display: inline; margin-bottom: 5px;" type="button" class="btn btn-block btn-lg btn-primary" data-toggle="modal" data-target="#addLinkDialog"value="Add Link" id="addLinkBtn" />
<div id="cats">

<div class="cats">
	
</div>
			</div>
		</div>
	    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

<!-- 		<script src="dist/js/vendor/jquery.min.js"></script> -->
		<!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/application.js"></script>
	</body>
</html>
