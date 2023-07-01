<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php_mailer/Exception.php';
require 'php_mailer/PHPMailer.php';
require 'php_mailer/SMTP.php';

$json = array();
$errors = false;
	
if (isset($_POST['name']) && empty($_POST['name'])) {
	$json['error']['name'] = "Обязательное поле";
}
	
if (isset($_POST['phone']) && empty($_POST['phone'])) {
	$json['error']['phone'] = "Обязательное поле";
}
	
if (isset($_POST['time']) && empty($_POST['time'])) {
	$json['error']['time'] = "Обязательное поле";
}

if (!isset($json['error'])) {
	$to      = 'robot@geely.by';
	$to2     = 'op@geely.by';
	$from    = 'robot@geely.by';
	
	$mail = new PHPMailer(true);
	try {
		$body = 'Данные формы:<br>';
		$body .= 'Страница: <b><a href="https://coolray.geely.by/">coolray.geely.by</a></b><br>';
		if (isset($_POST['theme'])) {
			if ($_POST['theme'] == 'test-drive') $body .= 'Форма: <b>Заявка на тест-драйв</b><br>';
			if ($_POST['theme'] == 'callback') $body .= 'Форма: <b>Заказать звонок</b><br>';
			if ($_POST['theme'] == 'request-auto') $body .= 'Форма: <b>Заявка на авто</b><br>';
		} 		
		
		if (isset($_POST['name']) && !empty($_POST['name'])) 
			$body .= 'client name: ' . strip_tags($_POST['name']) . '<br/>';
		
		if (isset($_POST['phone']) && !empty($_POST['phone'])) 
			$body .= 'phone: ' . strip_tags($_POST['phone']) . '<br/>';
				
		if (isset($_POST['time']) && !empty($_POST['time'])) 
			$body .= 'time: ' . strip_tags($_POST['time']) . '<br/>';
					
		if (isset($_POST['shop']) && !empty($_POST['shop'])) 
			$body .= 'shop: ' . strip_tags($_POST['shop']) . '<br/>';
		
		$subject = 'Заказать звонок с сайта coolray.geely.by';
		
		if (isset($_POST['theme'])) {
			if ($_POST['theme'] == 'test-drive') $subject = 'Заявка на тест-драйв с сайта coolray.geely.by';
			if ($_POST['theme'] == 'callback') $subject = 'Заказать звонок с сайта coolray.geely.by';
			if ($_POST['theme'] == 'request-auto') $subject = 'Заявка на авто с сайта coolray.geely.by';
		} 
				
		//Recipients
		$mail->CharSet = 'UTF-8';		
		$mail->setFrom($from, 'Coolray geely.by');	
		$mail->addAddress($to);
		$mail->addAddress($to2);
		$mail->isHTML(true);
		$mail->Subject = $subject;
		$mail->Body    = $body;
		$mail->send();
			
		$json['success'] = true;
	} catch (Exception $e) {
		$json['success'] = false;	
		$json['error_message'] = 'Mailer Error: ' . $mail->ErrorInfo;
	}	
}		

header('Content-Type: application/json');
echo json_encode($json);