<?
$post_title = $_POST['post_title'];
$post_summary = $_POST['post_summary'];
$post_content = $_POST['post_content'];

if($_FILES['post_img']['name'] != NULL){
    $date = date("YmdHis",time());
    $ext = pathinfo($_FILES['post_img']['name'], PATHINFO_EXTENSION);
    $targetPath = "./image/news/".$date.".".$ext;
    if(move_uploaded_file($_FILES["post_img"]["tmp_name"], $targetPath)){
        echo "img upload success!<br>";
    }
    else{
        echo "img upload fail.. something wrong<br>";
    }
}
else{
   $targetPath = "./image/news/default.gif";
}

$servername = 'secret';
 $username = 'secret';
$password = 'secret!';

$DBname = 'secret';
$query = "INSERT INTO news VALUES(DEFAULT,DEFAULT,'".$post_title."','".$post_summary."','".$post_content."',DEFAULT,'".$targetPath."');";
$link = mysqli_connect($servername,$username,$password,$DBname) or die ("connect error");
$result = mysqli_query($link,$query) or die("query error");

if($result === TRUE){
    echo "<h1>upload success!!</h1>";
    echo "<h2>post_title : ".$post_title."<br>";
    echo "post_summary : ".$post_summary."<br>";
    echo "post_content : ".$post_content."<br>";
    echo "post_img : ".$targetPath."<br></h2>";
    echo "<a href='./newsUpload.php'><button>back</button></a>";
}
else{
    echo "upload fail<br><a href='./newsUpload.php'><button>back</button></a>";
}

?>