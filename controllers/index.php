<?php

require_once 'Validator.php';
require "Database.php";
require "functions.php";

$errors = [];

$firstName = $_POST['first-name'] ?? '';
$number = $_POST['number'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? '';
$message  = $_POST['message'] ?? '';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (!Validator::email($email)) {
        $errors['email'] = 'Please provide a valid email address';
    }
    if (!Validator::string($message, 1, 1000)) {
        $errors['message'] = 'Message must be between 1 and 1,000 characters';
    }
    if (!Validator::string($firstName, 1, 50)) {
        $errors['firstName'] = 'Please provide a name';
    }
    if (!Validator::number($number)) {
        $errors['number'] = 'Please provide a contact number';
    }
    if (!Validator::string($subject, 1, 250)) {
        $errors['subject'] = 'Please enter a subject';
    }
    if (empty($errors)) {
        $db = new Database();
        $db->queryAll('INSERT INTO enquiries(name, number, email, subject, message) VALUES(:firstName, :number, :email, :subject, :message)', [
            'firstName' => $firstName,
            'number' => $number,
            'email' => $email,
            'subject' => $subject,
            'message' => $message
        ]);
        $_SESSION['MSG'] = "Message Successfully Sent";
    } 
}

require "views/index.view.php";

?>