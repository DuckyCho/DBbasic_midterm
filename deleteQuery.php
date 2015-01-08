<?
$post_id = $_POST['post_id'];

$servername = '127.0.0.1';
 $username = 'readUser';
$password = 'rksmdgks907Qkffl!';

$DBname = 'vandeoost_web2';
$query1 = "DELETE FROM releases WHERE ID=".$post_id.";";
$query2 = "DELETE FROM news WHERE ID=".$post_id.";";

$link = mysqli_connect($servername,$username,$password,$DBname) or die ("connect error");
$result = mysqli_query($link,$query1) or die("query error");
$result = mysqli_query($link,$query2) or die("query error");

if($result === TRUE){
    echo "<h1>delete success!!</h1>";
    echo "<h2>ID : ".$post_id."</h2>";
    echo "<a href='./newsUpload.php'><button>back</button></a>";
}
else{
    echo "delete fail<br><a href='./newsUpload.php'><button>back</button></a>";
}

?>