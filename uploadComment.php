<?
$nid = $_GET['nid'];
$name = $_POST['username'];
$comment = $_POST['comment'];

$servername = 'secret';
 $username = 'secret';
$password = 'secret!';

$DBname = 'secret';
$query = "INSERT INTO comment VALUES(DEFAULT,'".$name."','".$comment."',".$nid.");";
$link = mysqli_connect($servername,$username,$password,$DBname) or die ("connect error");
$result = mysqli_query($link,$query) or die("query error");

if($result === TRUE){
    echo "success";
}
else{
    echo "fail";
}

?>