<?php

    if (isset($_POST['submit'])) {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $birthday = $_POST['birthday'];
        $gender = $_POST['gender'];

        $mailTo = "andygaoofficial@gmail.com";
        $headers = "From";
        $message = "You have received an audition email submission from".$firstname.' '.$lastname;
    
        mail($mailTo, 'Subject', $message, $headers);
        header("Location: index.php?mailsend");
    }

?>