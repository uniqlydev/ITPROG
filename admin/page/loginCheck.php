<?php
    function parseEnv($path) {
        $contents = file_get_contents($path);
        $lines = explode("\n", $contents);
        $env = [];

        foreach ($lines as $line) {
            if (strpos($line, '=') !== false) {
                list($key, $value) = explode('=', $line, 2);
                $env[$key] = trim($value);
            }
        }

        return $env;
    }

    $env = parseEnv(__DIR__ . '/../.env'); // Assuming loginCheck.php is in ITPROG/admin/page/

    $dbconnect = mysqli_connect($env['DB_HOST'], $env['DB_USER'], $env['DB_PASS']) or die ("Unable to Connect". mysqli_error($dbconnect));
    $db = mysqli_select_db($dbconnect, $env['DB_NAME']);


    if (isset($_POST["loginButton"])) {
        $user = $_POST["username"];
        $pass = $_POST["password"];

        if ($user == "" || $pass == "") {
            header("location: ../index.php?error=1");
            exit();
        }

        $query = mysqli_query($dbconnect, "SELECT uname, password FROM Administrator WHERE uname='$user' AND password='$pass'");

        $fetch = mysqli_fetch_array($query);

        if ($user == $fetch["uname"] && $pass = $fetch["password"]) {
            session_start();
            $_SESSION['getLogin'] = $user;
            header("location: adminPage.php");
        } else {
            header("location: ../index.php?error=1");
        }
    }
?>