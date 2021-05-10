<?php

$servername= "localhost";
$username= "root";
$password ="root";
$dbname = "db_hotel";

//Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check Conn
if ($conn && $conn->connect_error) {
  echo "Connection Failed: ". $conn->connect_error;
}

?>
