<?php 
	if(isset($_POST['submit'])) {
		$name = $_POST['name'];
		$mailFrom = $_POST['mail'];
		$phone = $_POST['phone'];
		$message = $_POST['message'];

		$mailTo = "muhammedmohsen8695@outlook.com";
		$headers = "From: ".$mailFrom;
		$txt = "You have received an e-mail from ".$name.".\n\n".$message;

		mail($mailTo, $message, $txt, $headers);
		header("Location: index.html?mailsend");
	}

?>