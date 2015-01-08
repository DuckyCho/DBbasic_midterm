<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>vandeoost news upload</title>

    <!-- Bootstrap -->
    <link href="./css/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<?php

    $nid = $_GET['nid'];
    $servername = 'secret';
    $username = 'secret';
    $password = 'secret!';

    $DBname = 'secret';
    $query = "SELECT * FROM comment where news_ID=".$nid.";";
    $link = mysqli_connect($servername,$username,$password,$DBname) or die ("connect error");
    $result = mysqli_query($link,$query) or die("query error");
    
    $result_array = array();
    echo "<div class='col-md-12'><h1>All comment on post ".$nid."</h1></div>";
    while($row = mysqli_fetch_object($result)){
        $username = $row->username;
        $comment =  $row->comment;
        //echo "<h2>username : ".$username."</h2><h3>comment : ".$comment."</h3><br>";
        echo "<div class='col-md-12'><div class='panel panel-info'><div class='panel-heading'><h3 class='panel-title'>".$username."</h3></div><div class='panel-body'>".$comment."</div></div></div>";

    };
?>
    <?php
     echo "<form enctype='multipart/form-data' method='post' action='uploadComment.php?nid=".$nid."'>";
    ?>
        <div class="col-md-12" style="margin-bottom:5em;">
            <div class="row col-md-4 col-md-offset-1" style="margin-top:1em;">
                <label for="USERNAME">USERNAME</label>
                <input id="USERNAME" type="USERNAME" class="form-control" placeholder="USERNAME" name="username">
            </div>
         
            <div class="row col-md-10 col-md-offset-1" style="margin-top:1em;">
                <label for="COMMENT">COMMENT</label>
                <textarea id="COMMENT" class="form-control" rows="13" placeholder="ADD COMMENT" name="comment">
                </textarea>
            </div>
            <div class="row col-md-4 col-md-offset-4" style="margin-top:1em;">
                <button class="btn btn-sm btn-primary btn-block" id="button" type="submit">ADD COMMENT</button>
            </div>
        </div>
    </form>
        </body>