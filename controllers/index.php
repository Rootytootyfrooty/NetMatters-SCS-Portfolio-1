<?php

require_once 'Validator.php';
require "Database.php";

$errors = [];

$firstName = $_POST['first-name'] ?? '';
$lastName = $_POST['last-name'] ?? '';
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
        $errors['firstName'] = 'Please provide a first name';
    }
    if (!Validator::string($lastName, 1, 50)) {
        $errors['lastName'] = 'Please provide a last name';
    }
    if (!Validator::string($subject, 1, 250)) {
        $errors['subject'] = 'Please enter a subject';
    }
    if (empty($errors)) {
        $db = new Database();
        $db->queryAll('INSERT INTO portfolio(first_name, last_name, email, subject, message) VALUES(:firstName, :lastName, :email, :subject, :message)', [
            'firstName' => $firstName,
            'lastName' => $lastName,
            'email' => $email,
            'subject' => $subject,
            'message' => $message
        ]);
        $_SESSION['MSG'] = "Message Successfully Sent";
    }
}

require "views/index.view.php";

?>