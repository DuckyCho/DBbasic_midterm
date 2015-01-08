<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>vandeoost news upload</title>

    <!-- Bootstrap -->
    <link href="./css/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <div class="row">
        <div class="col-md-4 col-md-offset-4 text-center">
            <h2>News Upload</h2>
        </div>
    </div>
    <div class="row" style="margin-top:1em;">
        <div class="col-md-4 col-md-offset-8">
            <div class="col-md-4 col-md-offset-4">
                <form method='post' action='logout.php'>
                <button class="btn btn-sm btn-danger btn-block">logout</button>
                </form>
            </div>
        </div>
    </div>
    
    <form enctype="multipart/form-data" method='post' action='uploadQuery.php'>
        <div class="col-md-12" style="margin-bottom:5em;">
            <div class="row col-md-4 col-md-offset-1" style="margin-top:1em;">
                <label for="title">POST TITLE</label>
                <input id="title" type="title" class="form-control" placeholder="Post Title VARCHAR(50)" name="post_title">
            </div>
            <div class="row col-md-8 col-md-offset-1" style="margin-top:1em;">
                <label for="summary">POST SUMMARY</label>
                <input id="summary" type="summary" class="form-control" placeholder="Post Summary VARCHAR(80)" name="post_summary">
            </div>
            <div class="row col-md-10 col-md-offset-1" style="margin-top:1em;">
                <label for="content">POST CONTENT</label>
                <textarea id="content" class="form-control" rows="13" placeholder="Post Content LONGTEXT" name="post_content">
                </textarea>
            </div>
            <div class="row col-md-10 col-md-offset-1" style="margin-top:1em;">
                <div class="form-group">
                <label for="image">POST IMAGE</label>
                <input type="file" id="post_img" name="post_img">
                </div>
            </div>
            <div class="row col-md-4 col-md-offset-4" style="margin-top:1em;">
                <button class="btn btn-sm btn-primary btn-block" id="button" type="submit">SUBMIT</button>
            </div>
        </div>
    </form>
    <?
    $servername = 'secret';
 $username = 'secret';
$password = 'secret!';

    $DBname = 'secret';
    $query = "SELECT * FROM news;";
    
    $link = mysqli_connect($servername,$username,$password,$DBname) or die ("connect error");
    $result = mysqli_query($link,$query) or die("query error");
    echo "<div class='col-md-12'>";    
    while($row = mysqli_fetch_row($result)){
        echo "<div class='row' style='margin-bottom:1em;'><div class='col-md-1'>".$row[0]. "</div><div class='col-md-1'>".$row[1]."</div><div class='col-md-2'>".$row[2]."</div><div class='col-md-2'>".$row[3]."</div><div class='col-md-3'>".$row[4]."</div><div class='col-md-2'><img src='".$row[6]."' style='width:100%;'></div><div class='col-md-1'><form method='post' action='deleteQuery.php'><button class='col-md-12 btn btn-danger btn-xs' name='post_id' type ='submit' value='".$row[0]."'>delete</button></form></div></div>";
        
    }
    echo "</div>";
    ?>
        
   

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="./css/dist/js/bootstrap.min.js"></script>

</body>