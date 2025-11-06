<?php
require_once __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
$dotenv->load();

require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $email   = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $subject = trim(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING));
    $message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING));

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        header("Location: error.html?error=emptyfields");
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: error.html?error=invalidemail");
        exit;
    }

    $to = "codesparkke@gmail.com";
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $_ENV['MAIL_USERNAME'];
        $mail->Password   = $_ENV['MAIL_PASSWORD'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "Contact Form Submission: $subject";
        $mail->Body    = "
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong><br>$message</p>";
        $mail->AltBody = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

        $mail->send();

        header("Location: thank-you.html");
        exit;

    } catch (Exception $e) {
        // Log error or pass it via query string for debug if needed
        header("Location: error.html?error=mailfail");
        exit;
    }
} else {
    header("Location: error.html?error=badrequest");
    exit;
}
?>
