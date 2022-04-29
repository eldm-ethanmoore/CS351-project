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
   // print json_encode($rowRepNum);

    $br = mysqli_query($conn,"SELECT Balance, RepNum FROM `customer`");
    $brRow= array();
    while($r = mysqli_fetch_assoc($br)) {
        $brRow[] = $r;
    }
    //print json_encode($brRow) . "\n";

    $countCustomers = Count($brRow);
    $countReps = Count($rowRepNum);

    $totalRepReport = array();
    for($x = 0;$x < $countReps ;$x++)
    {
        //print "Rep #" . $x . json_encode($rowRepNum[$x]) . "\n"; 
        $customerBalance = 0;
        $numOfCustomers = 0;
        for($i = 0; $i < $countCustomers; $i++)
        {
            //print "Customer #" . $i . json_encode($brRow[$i]) . "\n"; 
            if(json_encode($brRow[$i]['RepNum']) == json_encode($rowRepNum[$x]['RepNum']))
            {
                $customerBalance = $customerBalance + ((float) $brRow[$i]['Balance']);
                $numOfCustomers = $numOfCustomers + 1;
            }
        }
        $repNumFirstLastCustomerCountBalance = array('RepNum' => $rowRepNum[$x]['RepNum'], 'Balance' => $customerBalance, 'FirstName' => $rowRepNum[$x]['FirstName'], 'LastName' => $rowRepNum[$x]['LastName'], 'NumOfCustomers' => $numOfCustomers);
        $totalRepReport[$x] = $repNumFirstLastCustomerCountBalance;
        //print strval($customerBalance) . " " . strval($numOfCustomers) . "\n";
    }
    print json_encode($totalRepReport) . "\n";
?>