<?php
class Login{

	function __construct(){
		$servername = "localhost";
		$username = "root";
		$password = "";

		try {
		  $this->db = new PDO("mysql:host=$servername;dbname=school", $username, $password);
		  // set the PDO error mode to exception
		  $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		  echo "Connection Successfull ";
		  
		} catch(PDOException $e) {
		  echo "Connection failed: " . $e->getMessage();
		}

	}
}
?>