<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "/home/erictj/public_html/pruebas.masqfactura.com/php/Exception.php";
require "/home/erictj/public_html/pruebas.masqfactura.com/php/PHPMailer.php";
require "/home/erictj/public_html/pruebas.masqfactura.com/php/SMTP.php";

$mail= new PHPMailer();
$mail->isSMTP();
$mail->Host='smtp.gmail.com';
$mail->Port=587;
$mail->SMTPSecure='tls';
$mail->SMTPAuth=true;
$mail->Username='envio.facturas.automatico@gmail.com';
$mail->Password='kdqignzetuxuzivw';

if (isset($_POST['Submit'])){
    if(isset($_POST['Correo_Electronico'])&& $_POST['Correo_Electronico'] != ''){
        //submit the form
        $mail->setFROM('soporte@bajaapps.net','Bajaapps');
        $mail->addAddress($_POST['Correo_Electronico'],$_POST['Nombre'].' '.$_POST['Apellido']);
        $mail->Subject='Nuevo mensaje de '.$_POST['Nombre'].' '.$_POST['Apellido'];
        $message = "De: ".$_POST['Nombre'].' '.$_POST['Apellido']."\r\n"."Estado de Mexico del usuario: ".$_POST['Estado_de_Mexico']."\r\n".$message.= "Telefono del usuario: ".$_POST['Telefono']."\r\n"."Mensaje del Usuario: ".$_POST['Preguntas_y/o_Comentarios'];
        $mail->msgHTML($message);        
    }
}

if(!$mail->send()){
    //header("Location: ../error.html");
    echo $mail->ErrorInfo;
    echo '<p>'.var_dump($_POST).'</p>';
}else{
    header("Location: ../gracias.html");
}
?>