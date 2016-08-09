<?php
    $error = 0;
    if(!mail("helloworld@tupledevelopment.com", "Hot Tamales Inquiry", "Name: " . $_POST['fName'] . " " . $_POST['lName'] . "\r\nNumber: ". $_POST['number'] . "\r\nEmail: ". $_POST['email'] ."\r\nMessage: \r\n". $_POST['message'])){
         $error = 1;
    }

//https://erdplus.com/#/edit-diagram/105201
    echo $error;
?>


