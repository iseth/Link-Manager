$(document).ready(function() {
// 	console.log("document ready");

    //INITIALIZATION OF VARIABLES
    var uid = 0;
    var aparent = 0;

    $.ajax({
    url: "process.php",
    data: "action=getparent&uid="+uid,
    success: function(d)
       {
      aparent = d;
  //       $(selectClass).val( d );
       },
       error: function(xhr, textStatus, errorThrown){
        alert("uid =>" + uid + "d =>" + d);
     }
    });


    //$( "#tabs" ).tabs();
    $("input:submit").button();
    $("#modal").modal({ autoOpen: false});
    $("#addCatmodal").modal({ autoOpen: false});
    $("#addLinkmodal").modal({ autoOpen: false});

document.getElementById("close-delete-category-btn").onclick = function() {shoo()};

function shoo() {
	console.log("it has children");
	var ss = document.getElementById("confirm-delete-category-btn").classList;
	ss.remove("hide");
	var ss = document.getElementById("delete-msg").classList;
	ss.remove("hide");
	var hide_msg = document.getElementById("cat-with-children");
	hide_msg.className += " hide";
}

document.getElementById("confirm-delete-category-btn").onclick = function() {deleteCat()};

function deleteCat() {
	$.ajax({
		url: "process.php",
		data: "action=getchildren&parent=" + data,
		success: function(d) {
			//there's children - can't delete
			if(d == "1") {
				console.log("it has children");
				var ss = document.getElementById("cat-with-children").classList;
				ss.remove("hide");
				var d = document.getElementById("delete-msg");
				d.className += " hide";
				var hide_msg = document.getElementById("confirm-delete-category-btn");
				hide_msg.className += " hide";
			}
			else {
				//uid =
				$.ajax({
					url: "process.php",
					data: "action=removecat&uid=" + theThis.parents(".category").first().attr("id").substring(3, 5),
					success: function(d) {
						$(".cats").html("");
						populateCats();
						populateLinks();
					}
				});
				$( "#modal-confirm-delete-category" ).modal("hide");

			}
		}

	});
}

document.getElementById("confirm-delete-link-btn").onclick = function() {deleteLink()};

function deleteLink() {
	$.ajax({
		url: "process.php",
		data: "action=removelink&uid=" + uid,
		success: function(d) {
			if(d == "1") {
				$(".cats").html("");
				populateCats();
				populateLinks();
			}
			else {
				$("#modal").html("Link wasn't removed.  I'm sorry.").modal("show");
			}
		}
	});
	$( "#modal-confirm-delete-link" ).modal("hide");
}

    populateCats();
    $("#remove_cat input:submit").hide();

    //CLICKS

    $("#addCatBtn").click(function() //add category button
    {
        console.log("Add Cat clicked - > ");
		console.log(populateSelectCats());
		console.log("<--");

        $(".catOption").html("");
        $("#addCatmodal").modal("show");
        populateSelectCats($(".catOption").first());
    });

    $("#addLinkBtn").click(function() //add link button
    {
        console.log("Add Cat clicked");
        $(".catOption").html("");
        $("#addLinkmodal").modal("show");
        populateSelectCats($(".catOption").eq(1));
        $(".catOption").eq(1).find("option").eq(0).remove(); //remove "Top Level" option
    });

	//delete a category
    $("#cats").on("click", ".deleteLink", function(e) {
        e.preventDefault();
        data = $(this).parent().attr("id").substring(3, 10);
        theThis = $(this);

        $( "#modal-confirm-delete-category" ).modal("show");

    });
//var thisItem =
	//edit and save category
    $("#cats").on("click", ".editLink", function(e) {
      $('.catEditOption').children().remove(); // flushes old options from selctor
        e.preventDefault();

// ------------------

        if($(this).html() == "Edit")
        {

// 	        console.log("Edit Cat clicked");
	        $(".catOption").html("");
	        $("#modal-edit-cat").modal("show");
          var uid = $(this).attr("href");

          // console.log("this uid is: =>" + uid);

          // console.log(getParent(parseInt($(this).attr("href"))));

          //
          // if (uid != $(this).parents(".category").last().attr("id").substring(3, 10)) {
          //   var parentId = $(this).parents(".category").last().attr("id").substring(3, 10);
          // } else {
          //   var parentId = 0;
          // }
          // console.log("parent: " + parentId);

          var thisItem = $(this);

            populateSelectCats(".catEditOption", function(){
                      var selectValue = thisItem.parents(".category").first().attr("id").substring(3, 10);
                      // console.log("Select Value: ", selectValue);
                      // console.log(thisItem.find("value");
                      selectSelector(selectValue);
                      $("option[value='" + uid + "']").attr("disabled","disabled");
            });

			document.getElementById("edit-category_val").value = $(this).parent().find("span.catTitle").first().html();

			newCat = document.getElementById("edit-category_val").value;
      newParent = $(".catEditOption").val();
      // updateCat(uid, newCat, newParent)

      document.getElementById("confirm-update-cat-btn").onclick = function() {
        newCat = document.getElementById("edit-category_val").value;
        newParent = $(".catEditOption").val();
        console.log(uid);
        console.log(newCat);
        console.log(newParent);
        updateCat(uid, newCat, newParent);
        $( "#modal-edit-cat" ).modal("hide");

      };


      $(this).html("Edit");

			$(this).parent().find("span.catTitle input").keypress(function(e)
            {
                if(e.which == 13) //13 is enter key
                {
                    console.log("Enter key pressed this is: ", $(this));
                    console.log($(this).parent().next());
                    // saveEditedCat($(this).parent().next()); //cant' just do $(this) because 'input' is this when using enter key instead of the "Save" link
                }
            });
        }
        else if($(this).html() == "Save")
        {
            //saveEditedCat(catTitle, uid);
        }
    });

    $("#cats").on("click", ".expand", function(e) //expand + sign
    {
//         console.log($(this).parent().children(".links"));
        $(this).parent().children(".links").slideToggle();

        if($(this).html() == "+" && $(this).parent().find(".links").html() !== "")
            $(this).html("-");
        else if($(this).html() == "-")
            $(this).html("+");
    });

    $("#cats").on("click", ".link .title", function(e) //link expand
    {
        $(this).next(".linkcontent").slideToggle();
    });

    $("#cats").on("click", ".editBtn", function(e) //edit and save a link
    {
        if($(this).val() == "Edit")
        {
            console.log("Edit Clicked!");
            $(this).val("Save");
            $(this).parent().find("input[name=uid]").val();
            $(this).parent().find(".deleteBtn").val("Cancel");

            $(this).parent().find(".editable").each(function(){
                var content = "";
                var name = $(this).attr("name");
                switch(name) {
                    case "url":
                        content = $(this).find("a").attr("href");
                        $(this).html("<input style=\"margin-top: -20px;\" class=\"form-control login-field\" type=\"text\" name=\"" + name + "\" value=\""+ content +"\" /><br />");
                        break;

                    case "title":
                        content = $(this).parent().parent().parent().find(".title").html();
                        $(this).html("<input class=\"form-control login-field\" type=\"text\" name=\"" + name + "\" value=\""+ content +"\" /><br />");
                        break;

                    case "parent":
                        $(this).html("<select name=\"" + name + "\" class=\"form-control select select-primary catOption\" data-toggle=\"select\" ></select> <br />");
                        var parentId = $(this).parents(".category").last().attr("id");
                        console.log("Parent ID: #" + parentId + " .catOption");
                        var thisItem = $(this);
                        console.log("Item: ", thisItem);
                        populateSelectCats( "#" + parentId + " .catOption", function(){
                            var selectValue = thisItem.parents(".category").first().attr("id").substring(3, 5);
                            console.log("Select Value: ", selectValue);
                            thisItem.find("select").val(selectValue);
                        });
                        break;

                    case "description":
	                     $("div").removeClass("well");
                        content = $(this).html();
                        $(this).html("<textarea style=\"margin-top: -20px;\" class=\"form-control login-field\" name=\"" + name + "\">"+ content +"</textarea>");
                        break;
                }
                console.log("Name: " + name + " Content: ", content);

            });


        }
        else if($(this).val() == "Save")
        {
            $(this).parent().find(".deleteBtn").val("Delete");

            var data = $(this).parent().serialize();
            var saveBtn = $(this);

            $.ajax({
            url: "process.php",
            data: "action=editlink&" + data,
            success: function(d)
               {
                   if(d == "1")
                   {
                       console.log("Save was a success!");
                       saveBtn.parent().find(".editable").each(function(){
                           console.log("Running Save .each function");
                           var content = "";
                           var name = $(this).attr("name");
                           switch(name) {
                               case "url":
                                   var url = $(this).find("input").val();
                                   content = "<a href=\"" + url + "\" target=\"_blank\">🔗" + url + "</a>";
                                   $(this).html(content);
                                   break;

                               case "title":
                                   content = $(this).find("input").val();
                                   $(this).html("");
                                   $(this).parent().parent().prev().html(content);
                                   break;

                               case "parent":
                                   $(this).html("");
                                   break;

                               case "description":
                                    var d = document.getElementById("welll");
									d.className += " well";
                                   content = $(this).find("textarea").val();
                                   console.log("Desc:  ", content);
                                   $(this).html(content);
                                   break;
                           }
                           //console.log("Name: " + name + " Content: ", content);

                       });

                       saveBtn.val("Edit");

                   }
                   else
                       $("#modal").html("An error has occurred.").modal("show");
               }
            });
                 location.reload();

        }
    });

    $("#cats").on("click", ".deleteBtn", function(e)
    {
        if($(this).val() == "Delete")
        {
            var deleteBtn = $(this);
            uid = deleteBtn.parent().find("input[name=uid]").val();

            $( "#modal-confirm-delete-link" ).modal("show");

        }
        else if($(this).val() == "Cancel")
        {
            var cancelBtn = $(this);
            uid = cancelBtn.parent().find("input[name=uid]").val();

            $.ajax({
            url: "process.php",
            data: "action=getlink&uid=" + uid,
            success: function(d)
               {
                   var results = $.parseJSON(d);
                   console.log("Cancel JSON: ", results);
                   if(d)
                   {
                       console.log("Cancel was a success!  This is what cancelBtn is: " + cancelBtn);
                       cancelBtn.parent().find(".editable").each(function(){
                           console.log("Running Cancel .each function");
                           var content = "";
                           var name = $(this).attr("name");
                           switch(name) {
                               case "url":
                                   var url = results.url;
                                   content = "<a class=\"\" href=\"" + url + "\" target=\"_blank\">🔗 " + url + "</a>";
                                   $(this).html(content);
                                   break;

                               case "title":
                                   content = results.title;
                                   $(this).html("");
                                   break;

                               case "parent":
                                   $(this).html("");
                                   break;

                               case "description":
                                   content = results.description;
                                   console.log("Desc:  ", content);
                                    var d = document.getElementById("welll");
									d.className += " well";
                                   $(this).html(content);
                                   break;
                               }//end switch
                           });//end .each
                        }//end if d==1
                    }//end success

                });//end ajax


                       cancelBtn.val("Delete");
                       cancelBtn.prev().val("Edit");
        }

    });

    //FORM SUBMISSIONS
    $("#add_cat").submit(function(e)
    {
         e.preventDefault();
         console.log("Add category submitted");
         if ($("#category_val").val()) {

	         $.ajax({
	         url: "process.php",
	         data: "action=addcat&cat=" + $("#category_val").val() + "&parent=" + $("#add_cat .catOption").val(),
	         success: function(d)
	            {
	                if(d == "1")
	                {
	                    $("#modal").html("Category has been added.").modal("show");
	                    $("#addCatmodal").modal("close");
	                    $("#category_val").val("");
	                    $(".cats").html("");
	                    $(".catOption").html("");
	                    populateCats();
	                    populateLinks();
	                }
	                else
	                    $("#modal").html("An error has occurred.").modal("show");
	            }
	         });
	         $( "#addCatDialog" ).modal("hide");
		 }
    });

    $("#add_link").submit(function(e)
    {
         e.preventDefault();
         console.log("Add link submitted");
         var data = $("#add_link").serialize();
		 if ($("#url_title").val() && $("#url_url").val() && $("#add_link [name=description]").val()) {
	         $.ajax({
	         url: "process.php",
	         method: "POST",
	         data: "action=addlink&" + data,
	         success: function(d)
	            {
	                if(d == "1")
	                {
	                    $("#modal").html("Link has been added.").modal("show");
	                    $("#url_title").val("");
	                    $("#url_url").val("");
	                    $("#add_link [name=description]").val("");
	                    $(".cats").html("");
	                    $(".catOption").html("");
	                    $("#addLinkmodal").modal("close");
	                    populateCats();
	                    populateLinks();
	                }
	                else
	                    $("#modal").html("An error has occurred.").modal("show");
	            }
	         });
	         $( "#addLinkDialog" ).modal("hide");
		}
    });

});//end document ready

//FUNCTIONS

function nl2br(value) {
  return value.replace(/\n/g, "<br />");
}

function saveEditedCat(newCat, newParent, uid) {
    // var newCat = newCat;
    // var newParent =

	console.log(uid);
	console.log("\"" + newCat + "\"");

    $.ajax({
    url: "process.php",
    data: "action=editcat&uid=" + uid + "&category=" + newCat + "&parent=" + newParent,
    success: function(d)
       {
           if(d == "1")
           {
			   $("#catTitle-" + uid).html(newVal);
				//clicker.parent().find("span.catTitle").html(newVal);
               $( "#modal-edit-cat" ).modal("hide");
           }
           else
           {
               $("#modal").html("An error has occurred saving this to the database.").modal("show");
           }
       }
     });
}

//gets categories and populates the dropdowns on this page
function populateCats() {
// 	console.log("populate cats");
    $.ajax({
    url: "process.php",
    data: "action=getcats",
    success: function(d)
       {
           var results = $.parseJSON(d);
           if (Object.keys(results).length > 0) {
               var prevIndent = false;
               var prevId = "";
               var catSelector = "";
               $.each(results, function(key, value)
               {
                  if (prevIndent === false) {
                      catSelector = $(".cats");
                  } else if(prevIndent < value[1]) {
                      catSelector = $(".cats #cat"+ prevId +" .links");
                  } else if(prevIndent > value[1]) {
                      catSelector = $(".cats #cat"+ prevId  +" .links");
                      var thisGap = prevIndent - value[1];
                      for( var j = 0; j <= thisGap; j++) {
                        catSelector = catSelector.parent().parent();
                      }
                  }

                if(value[2] > 0) //has children
                {
                    output = "<span class=\"expand\">+</span>";
                }
                else {
                    output = "<span class=\"noExpand\">&nbsp;</span>";
                }

                catSelector.append("<div class=\"category item\" id=\"cat" + value[0] + "\" style= \"margin-left:"+ (value[1] * 5) +"px\" >" + output + "<span id=\"catTitle-" + value[0] + "\" class=\"catTitle\">" + key + "</span>&nbsp;<a class=\"editLink\" href=\"" + value[0] + "\" id=\"edit-cat-btn\" data-target=\"#modal-edit-cat\">Edit</a> <a class=\"deleteLink\" href=\"" + value[0] + "\">Delete</a><div class=\"links\"></div>");
                  populateLinks(value[0], catSelector.children("#cat"+value[0]).children(".links"));
                  prevIndent = value[1];
                  prevId = value[0];
               });
           }
       }
    });
}

// function populateSelCats(thisSelect = false, )

//gets categories and populates the dropdowns on this page
function populateSelectCats(thisSelect = false, callback = false) {
    var selector = "";
    if(thisSelect) {
        selector = thisSelect;
    } else {
        selector = ".cats .catOption";
    }
/*
    console.log(thisSelect);
    console.log("Selector: " + selector);
*/
    $(selector).append("<option value=\"" + 0 + "\">Top Level</option>");
    $.ajax({
    url: "process.php",
    data: "action=getcats",
    success: function(d)
       {
           //console.log("Selector: " + selector);
           var results = $.parseJSON(d);
           if (Object.keys(results).length > 0) {
               $.each(results, function(key, value)
               {
                  var indent = "";
                  for(var i = 0; i < value[1]; i++)
                  {
                      indent += "&nbsp;&nbsp;&nbsp;";
                  }

                  $(selector).append("<option value=\"" + value[0] + "\" >" + indent + key + "</option>");

               });
               if(callback) {
                   callback();
               }
           }
       }
    });
}

function selectSelector(uid) {
  $.ajax({
  url: "process.php",
  data: "action=getparent&uid="+uid,
  success: function(d)
     {
       $(".catEditOption").val( d );
     },
     error: function(xhr, textStatus, errorThrown){
      alert("uid =>" + uid + "d =>" + d);
     }
  });
}

function updateCat(uid = 0, newCat = "", newParent = 0 ) {
  var selector = "";

  console.log(uid);
  console.log(newCat);
  console.log(newParent);
  $.ajax({
  url: "process.php",
  data: "action=editcat&uid=" + uid + "&category=" + newCat + "&parent=" + newParent,
  success: function(d)
     {
         if(d == "1")
         {
      $("#catTitle-" + uid).html(newCat);
     //clicker.parent().find("span.catTitle").html(newVal);
             $( "#modal-edit-cat" ).modal("hide");
             document.location.reload(true)
             return 1;
         }
         else
         {
             $("#modal").html("An error has occurred saving this to the database.").modal("show");
             return 0;
         }
     }
   });
}

//check for children to see about adding expand
function checkChildren(uid) {
    var output = "";
    $.ajax({
    url: "process.php",
    data: "action=getchildren&parent="+uid,
    success: function(d)
       {
           if(d == "1")
           {
               output = "<span class=\"expand\">+</span>";
           }
           else
           {
               output = "<span class=\"expand\"></span>";
           }

           return output;
       }
   });
}

function populateLinks(uid, selector) {
    $.ajax({
    url: "process.php",
    data: "action=getlinks&uid="+uid,
    success: function(d)
       {
           var returnHTML = "";
           var results = $.parseJSON(d);
           if (Object.keys(results).length > 0) {
               $.each(results, function(key, value) {
                   returnHTML += "<div class=\"link item\" style=\"margin-left:20px;\"><span class=\"title\">" + value[0] + "</span><div style=\"width: 370px;\" class=\"\"><form class=\"edit\"><div class=\"editable\" name=\"parent\"></div><div class=\"editable\" name=\"title\"></div><div class=\"editable\" style=\"max-width: 400px; word-wrap:break-word;\" name=\"url\"><a class=\"\" href=\""+ value[1] + "\" target=\"_blank\">🔗" + value[1] + "</a></div><div id=\"welll\" class=\"well\"><div class=\"editable\" style=\"/* margin-top:30px; width: 350px; */\" name=\"description\">" + value[2] + "</div></div><br /><input type=\"button\" value=\"Edit\" style=\"width: 165px; display: inline;\" class=\"editBtn btn btn-block btn-lg btn-primary\" /><input type=\"button\" style=\"width: 165px; margin-top: -1px; margin-left: 20px; display: inline;\" value=\"Delete\" class=\"deleteBtn btn btn-block btn-lg btn-primary\" /><input type=\"hidden\" name=\"uid\" value=\"" + key + "\"/></form></div><br /></div>";
               });
               selector.append(returnHTML);
           }

       }
    });
}
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
