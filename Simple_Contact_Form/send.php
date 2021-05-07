<?php
$to = "test@alifallahi.ir";
$subject = "Contact Form";
$fromName = "mail@alifallahi.ir";
$headers = "From: $fromName";

$name = $_POST['name'];
$email = $_POST['email'];

$message .="
User name is: ".($name)."\n
User email is: ".($email)."\n
";

$flgchk = mail("$to", "$subject", "$message", "$headers");
?>

<head>
	<title>finish</title>
</head>
<body>
	<p>Your message has been sent successfully!</p>
</body>
