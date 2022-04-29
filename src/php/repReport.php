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

    $resultRepNum = mysqli_query($conn,"SELECT RepNum, FirstName, LastName FROM `rep`");
    $rowRepNum = array();
    while($r = mysqli_fetch_assoc($resultRepNum)) {
        $rowRepNum[] = $r;
    }

    for($i = 0; $i <= Count($rowRepNum);$i++)
    {
        $resultBalRepNum = mysqli_query($conn,"SELECT * FROM `customer` WHERE RepNum = '$rowRepNum[$i]'");
        $rowBalRepNum = array();
        while($r = mysqli_fetch_assoc($resultBalRepNum)) {
            $rowBalRepNum[] = $r;
        }
    }
    print json_encode($rowBalRepNum);
    //print json_encode($rowRepNum);

?>