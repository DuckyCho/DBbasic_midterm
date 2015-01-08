<?php
if(!isset($_POST['id']) || !isset($_POST['password'])) exit;
$id = $_POST['id'];
$pw = $_POST['password'];

$servername = 'secret';
 $username = 'secret';
$password = 'secret!';
$DBname = 'secret';
$query = "SELECT * FROM admin where id='".$id."';";
    
$link = mysqli_connect($servername,$username,$password,$DBname) or die ("connect error");
$result = mysqli_query($link,$query) or die("query error");

$dataFromDB = mysqli_fetch_row($result);

if( $dataFromDB == NULL || $dataFromDB[1] != $pw )
{
        echo "<script>alert('아이디 또는 패스워드가 잘못되었습니다.');history.back();</script>";
        exit;
}
else{
        session_start();
        $_SESSION['id'] = $id;
        echo "<meta http-equiv='refresh' content='0;url=newsUpload.php'>";
}
?>
