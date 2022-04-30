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

    //starting values
    $currentOrderPrice = 0;
    $sumOfPrice = 0;

    $user = $_POST["user"];
    $pass = $_POST["pass"];

    //gets customer name and assigns it to $customerNameInput
    //testing input
    //$customerNameInput = "\"" . "Toys Galore" . "\"";
    $customerNameInput = "\"" . $_POST["nameInput"] . "\"";

    //get the customer's ID
    $sql = "SELECT CustomerNum FROM customer WHERE CustomerName = $customerNameInput;";
    $result = $conn->query($sql);

    if(mysqli_num_rows($result)==0){
        $sumOfPrice = 0;
    }else{
    
        $customerInfo = $result->fetch_assoc();
        $customerID = $customerInfo["CustomerNum"];

        //use the customer's ID to get all their orders
        $sql = "SELECT OrderNum FROM orders WHERE CustomerNum = $customerID";
        $result = $conn->query($sql);

        //take each order ID and get the price attached to it
        while($row = $result->fetch_assoc()) {
            $currentlyChecking = $row["OrderNum"];

            $sql = "SELECT QuotedPrice FROM orderline WHERE orderNum = $currentlyChecking";
            $secondResult = $conn->query($sql);

            while($row = $secondResult->fetch_assoc()) {
                $currentOrderPrice = $row["QuotedPrice"];
                $sumOfPrice = $sumOfPrice + $currentOrderPrice;
            }
        }

    }
    //echo $sumOfPrice;
    $nameAndSum = array('name' => $customerNameInput, 'sum' => $sumOfPrice);
    print json_encode($nameAndSum) . "\n"
?>