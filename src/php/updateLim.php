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

    $coust = $_POST["coustName"];
    $lim = $_POST["limit"];
    $coustNum = $_POST["coustNum"];

    $res = mysqli_query($conn,"UPDATE Coustomer SET CreditLimit = '$lim' WHERE CustomerNum = $coustNum AND CustomerName = '$coust'");
    print json_encode($res);


?>