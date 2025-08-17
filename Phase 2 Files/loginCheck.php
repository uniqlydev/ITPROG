<?php
    $dbconnect = mysqli_connect("localhost", "root", "") or die ("Unable to Connect". mysqli_error($dbconnect));
    $db = mysqli_select_db($dbconnect, 'dbanimoeats');

    if (isset($_POST["loginButton"])) {
        $user = $_POST["username"];
        $pass = $_POST["password"];

        if ($user == "" || $pass == "") {
            header("location:loginPage.php?error=1");
            exit();
        }

        $query = mysqli_query($dbconnect, "SELECT uname, password FROM Administrator WHERE uname='$user' AND password='$pass'");

        $fetch = mysqli_fetch_array($query);

        if ($user == $fetch["uname"] && $pass = $fetch["password"]) {
            session_start();
            $_SESSION['getLogin'] = $user;
            header("location:adminPage.php");
        } else {
            header("location:loginPage.php?error=1");
        }
    }
?>