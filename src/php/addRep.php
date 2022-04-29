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

    $repnum = $_POST["repnum"];
    $lastname = $_POST["lastname"];     
    $firstname = $_POST["firstname"];
    $street = $_POST["street"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $postalcode = $_POST["postalcode"];
    $commision = $_POST["commision"];
    $rate = $_POST["rate"];

    
    $result = mysqli_query($conn,"SELECT * FROM `rep` WHERE FirstName = '$user' and PostalCode = '$pass'");
    $row = array();
    while($r = mysqli_fetch_assoc($result)) {
        $row[] = $r;
    }

    if(Count($row) == 1)
    {
        $sql = "INSERT INTO rep (RepNum, LastName, FirstName, Street, City, State, PostalCode, Commission, Rate) VALUES ('$repnum', '$lastname', '$firstname', '$street', '$city', '$state', '$postalcode', '$commision', '$rate')";
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
?>