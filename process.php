<?php

error_reporting(E_ALL ^ E_NOTICE);
ini_set('error_log', 'E:/wwwroot/temp/errors.log');
ini_set('display_errors', '1');

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

require 'dbstuff.php';
$db = connectDB();
if ($_GET)
    $GLOBALS['data'] = $_GET;
if($_POST)
    $GLOBALS['data'] = $_POST;

$action = $GLOBALS['data']['action'];

switch ($action)
{
    case "editcat":
        echo(editCat($GLOBALS['data']['category'], $GLOBALS['data']['parent'], $GLOBALS['data']['uid'], $db));
        break;
    case "addcat":
        addCat($db);
        break;

    case "getcats":
        print(json_encode(getCats(0,0,$db)));
        break;

    case "getcat":
        print(json_encode(getCat($GLOBALS['data']['uid'],$db)));
        break;

    case "addlink":
        addLink($db);
        break;

    case "editlink":
        editLink($db);
        break;

    case "getlinks":
        print(json_encode(getLinks($GLOBALS['data']['uid'],$db)));
        break;

    case "getlink":
        print(json_encode(getLink($GLOBALS['data']['uid'],$db)));
        break;

    case "removelink":
        removeLink($db);
        break;

    case "getitemsforcat":
        getItemsForCat($db);
        break;

    case "removecat":
        removeCat($db);
        break;

    case "ifchildren":
        print ifChildren($db, $GLOBALS['data']['parent']);
        break;

    case "getchildren":
        print getChildren($db, $GLOBALS['data']['parent']);
        break;

    case "getparent":
        print(getParent($GLOBALS['data']['uid'],$db));
        break;

    default:
    	print "0";
    	break;
}

function addCat($db)
{
    $sth = $db->prepare("INSERT INTO categories (category, parent) VALUES(?, ?)");
    $sth->execute( array($GLOBALS['data']['cat'], $GLOBALS['data']['parent']));

    if(!$sth->rowCount()) //there's no rows
			print "0";
		else
			print "1";
}

function getParent($uid, $db) {
  $sth = $db->prepare("SELECT parent FROM categories WHERE uid=" . $uid);

  $GLOBALS['data']['uid'] = $uid;

  $sth->execute();

  $output = $sth->fetch();

//  return $output;
  return $output['parent'];
}

function getCats($uid, $lvl, $db)
{
    $sth = $db->prepare("SELECT * FROM categories WHERE parent = ?");
    $sth->execute( array($uid) );
   if($sth->rowCount()) //there's no rows
   {
        while($row = $sth->fetch())
        {
            $children_array =  getCats($row['uid'], $lvl+1, $db);
            if( $children_array ) {
                $tmp_array[$row['category']] = [intval($row['uid']), $lvl, 1];
                $tmp_array = array_merge($tmp_array,  $children_array);
            } else {
                if(ifChildren($db, $row['uid']) == "1")
                    $tmp_array[$row['category']] = [intval($row['uid']), $lvl, 1];
                else
                    $tmp_array[$row['category']] = [intval($row['uid']), $lvl, 0];
            }
        }
        return $tmp_array;
    } else
    {
        return false;
    }
}

function getCat($uid, $db) {

    $sth = $db->prepare("SELECT * FROM categories WHERE parent = ?");
    $sth->execute( array($uid) );
    //$uid = parseInt($uid);
    if($sth->rowCount()) //there's no rows
    {
         while($row = $sth->fetch())
         {
            $tmp_array[$row['category']] = $row['uid'];
         }
         return $tmp_array;
     } else
     {
         return Array();
     }
}

function editCat($cat, $parent, $uid, $db)
{
    $sth = $db->prepare("UPDATE `categories` SET `parent` = '".$parent."', `category` = '".$cat."' WHERE `categories`.`uid` = ".$uid);

    $sth->execute( array($parent, $cat, $uid)); //there's no rows
    return "1";
}

function addLink($db)
{
    //print_r($GLOBALS);
    $sth = $db->prepare("INSERT INTO links (title, description, url, parent) VALUES(?, ?, ?, ?)");
    $sth->execute( array($GLOBALS['data']['title'], $GLOBALS['data']['description'], $GLOBALS['data']['url'], $GLOBALS['data']['parent']));

    if(!$sth->rowCount()) //there's no rows
			print "0";
		else
			print "1";
}

function editLink($db)
{
    $sth = $db->prepare("UPDATE links SET title=?, description=?, url=?, parent=? WHERE uid=?");
    $sth->execute( array($GLOBALS['data']['title'], $GLOBALS['data']['description'], $GLOBALS['data']['url'], $GLOBALS['data']['parent'], $GLOBALS['data']['uid']));

    if(!$sth->rowCount()) //there's no rows
            print "1";
        else
            print "1";
}

function getLinks($uid,$db)
{
    $sth = $db->prepare("SELECT * FROM links WHERE parent = ?");
    $sth->execute( array($uid) );
    //$uid = parseInt($uid);
    if($sth->rowCount()) //there's no rows
    {
         while($row = $sth->fetch())
         {
            $tmp_array[$row['uid']] = [$row['title'],$row['url'],$row['description']];
         }
         return $tmp_array;
     } else
     {
         return Array();
     }
}

function getLink($uid, $db)
{
    $sth = $db->prepare("SELECT * FROM links WHERE uid = ?");
    $sth->execute( array($uid) );

    return $sth->fetch();
}

function removeLink($db)
{
    $sth = $db->prepare("DELETE FROM links WHERE uid=?");
    $sth->execute( array($GLOBALS['data']['uid']));

    if(!$sth->rowCount()) //there's no rows
			print "0";
		else
			print "1";
}

function getItemsForCat($db)
{
    $sth = $db->prepare("SELECT * FROM categories WHERE parent=?");
    $sth->execute( array($GLOBALS['data']['uid']) );

    if(!$rows = $sth->rowCount()) //there's no rows
			$output = 0;
		else
			$output = $rows;

    $sth = $db->prepare("SELECT * FROM links WHERE parent=?");
    $sth->execute( array($GLOBALS['data']['uid']) );

    if(!$rows = $sth->rowCount()) //there's no rows
			$output += 0;
		else
			$output += $rows;

    print $output;
}

function ifChildren($db, $parent = null)
{
    $sth = $db->prepare("SELECT * FROM categories WHERE parent=?");

    if($parent)
        $GLOBALS['data']['parent'] = $parent;

    $sth->execute( array($GLOBALS['data']['parent']) );

    if(!$sth->rowCount()) //there's no rows
			$output = "0";
		else
			$output = "1";

    if($output == "0")
    {
        $sth = $db->prepare("SELECT * FROM links WHERE parent=?");
        $sth->execute( array($GLOBALS['data']['parent']) );

        if(!$sth->rowCount()) //there's no rows
    			$output = "0";
    		else
    			$output = "1";
    }

    return $output;
}

function getChildren($db, $parent = null)
{
    // return "-> $parent <-";
    $sth = $db->prepare("SELECT uid FROM categories WHERE parent=$parent");

    if($parent)
        $GLOBALS['data']['parent'] = $parent;

    $sth->execute( array($GLOBALS['data']['parent']) );

    if(!$sth->rowCount()) //there's no rows
			$output = "0";
		else
      if($sth->rowCount()) //there's no rows
      {
          $output .= "[";
           while($row = $sth->fetch())
           {
               $output .= $row['uid'].",";
           }
           $output = substr_replace($output, "", -1);
           $output .= "]";
      }

    return ($output);
}

function removeCat($db)
{
    $sth = $db->prepare("DELETE FROM categories WHERE uid=?");
    $sth->execute( array($GLOBALS['data']['uid']));

    if(!$sth->rowCount()) //there's no rows
			print "0";
		else
			print "1";
}

?>
