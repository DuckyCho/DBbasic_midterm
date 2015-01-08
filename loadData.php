<?php
    
    $page = $_GET['page'];
    $servername = 'secret';
 $username = 'secret';
$password = 'secret!';

    $DBname = 'secret';
    $query = "SELECT * FROM ".$page.";";
    
    $link = mysqli_connect($servername,$username,$password,$DBname) or die ("connect error");
    $result = mysqli_query($link,$query) or die("query error");

    $result_array = array();
    while($row = mysqli_fetch_object($result)){
        $result_array[] = $row;
    };
    //결과값을 JSON형식으로 변환
    $result_array = json_encode($result_array);
    //변수 내용 출력
    echo $result_array

?>