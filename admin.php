<!DOCTYPE html>
<meta charset="utf-8" />
<?php
session_start();
if(!isset($_SESSION['id'])) {
	echo "<meta http-equiv='refresh' content='0;url=login.php'>";
	exit;
}
$user_id = $_SESSION['id'];
echo "<meta http-equiv='refresh' content='0;url=newsUpload.php'>";
?>