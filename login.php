<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>vandeoost admin</title>

    <!-- Bootstrap -->
    <link href="./css/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <div class="container">
        <div class="col-md-4 col-md-offset-4">
            <form method='post' action='login_ok.php'>
                <h2 class="form-signin-heading">Vandeoost Admin</h2>
                <label for="inputEmail" class="sr-only">ID</label>
                <input type="id" id="inputID" class="form-control" placeholder="ID" name="id">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control mb-20" placeholder="Password" name="password">
                <button class="btn btn-sm btn-primary btn-block" id="button">Sign in</button>
            </form>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="./css/dist/js/bootstrap.min.js"></script>

</body>