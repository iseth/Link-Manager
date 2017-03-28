<?php
# Desc:  Modify this file and include it in all your DB calls.
# Make sure you put this file in you home directory (not in public_html).

function connectDB($database='tutorials_db', $host='localhost', $user='root', $pass='')
{
  try {
   $dbh = new PDO("mysql:host=$host;dbname=$database", $user,$pass);
   $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );
   $dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }

  return $dbh;
}
?>
