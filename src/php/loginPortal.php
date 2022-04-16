<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "CFG";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $user = $_POST["user"];
    $pass = $_POST["pass"];
      
    $myusername = $_POST['user'];
    
    $result = mysqli_query($conn,"SELECT * FROM `rep` WHERE FirstName = '$myusername' and PostalCode = '$pass'");
    $row = array();
    while($r = mysqli_fetch_assoc($result)) {
        $row[] = $r;
    }
    print json_encode($row);

?>