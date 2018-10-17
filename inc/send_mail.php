<?php


	$email 		= $_POST['email'];
	$phone 		= $_POST['phone'];
	$name 		= $_POST['name'];
	$msg		= $_POST['msg'];

	
	if( $name == '' || $email == '' || $phone == '' || $msg == ''){
		echo ("false");
	} 
	else {
		
		// $mail_to = "info@thelana.co";
        $mail_to = "aginoer12@gmail.com";
		
		
		$html_body = '
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
			<html xmlns="http://www.w3.org/1999/xhtml">
				<head>
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<title>Cube Main</title>
				</head>

				<body style="background-color:#bcbcbc;">

					<table cellspacing="0" cellpadding="10" style="margin:8px auto; width:500px; color:#0c0c0c; border:none; font-size:12px; font-family:Helvetica, sans-serif, Arial; box-shadow:2px 2px 1px 2px #333;">
						<tr style="background-color:#ececec;"><!-- Body -->
							<td colspan="3">
								<h2 style="color:#000;"> Hallo, </h2>
								<p> Anda menerima pesan baru dari customer Cubemain.com sebagai berikut : </p>
								<p>
									Nama : '.$name.'<br />
									Email : <a href="mailto:'.$email.'">'.$email.'</a><br />
									Handphone : '.$phone.'<br />
									Pesan : '.$msg.'
								</p>
								<p>Segera balas pesan ini untuk mendapatkan kepuasan pelanggan yang maksimal.</p>
								<p style="margin:15px auto auto auto;">
									Regards,<br />
									<strong>Automated Mailer.</strong>
								</p>
							</td>
						</tr>

						<tr style="background-color:#fff;"><!-- Footer -->
							<td colspan="3" align="center">
								Copyright &copy; Cube Main
							</td>
						</tr>
					</table>

				</body>
			</html>

		';		
		
		//	send email
		  $judul = 'Pesan baru dari Cube Main (http://www.cubemain.com/)';
		  
		  $header  = 'MIME-Version: 1.0' . "\r\n";
		  $header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		  $header .= 'From: Mail from Website <noreply@Cubemain.com>' . "\r\n";
		  $header .= 'Reply-To: ' . $fname . ' ' . $lname . '<' . $email . '>' . "\r\n";
		  $header .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

		if( $mail = mail($mail_to, $judul, $html_body, $header) ) {
			echo ("true");
		}else{
			echo ("false");
		}
		
	}
	

?>