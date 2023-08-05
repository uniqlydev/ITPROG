<?php
    session_start();
    if (!isset($_SESSION["getLogin"])) {
        header("location:../index.php");
    } else {
    }
?>

<html>
    <head>
        <title>
            Confirm Dishes via Application
        </title>
        <link rel="stylesheet" href="../public/css/addDishConfirmStyle.css">
    </head>

    <body>
        <div class="left">
            <div class="header-layer">
                <h1>Animo<span>Bites</span></h1>
            </div>
            <div class="menu">
                <button onclick="window.location.href = 'addDish.php';">Add Dishes</button><br>
                <button onclick="window.location.href = 'editDish.php';">Edit Dishes</button><br>
                <button onclick="window.location.href = 'deleteDish.php';">Delete Dishes</button><br>
                <button onclick="window.location.href = 'addCombo.php';">Add Combo</button><br>
                <button onclick="window.location.href = 'generateReport.php';">Generate Report</button><br>
                
                <button onclick="window.location.href = 'logoutPage.php';">Logout</button>
            </div>
        </div>
        <div class="right">
            <div class = "menu1">
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
                
                $env = parseEnv(__DIR__ . '/../.env'); 

                $conn = mysqli_connect($env['DB_HOST'], $env['DB_USER'], $env['DB_PASS']) or die ("Unable to Connect". mysqli_error($dbconnect));
                $use = mysqli_select_db($conn, $env['DB_NAME']);

                $name = $_POST["dishName"];
                $price = $_POST["dishPrice"];
                $image = $_POST["dishImage"];
                $description = $_POST["dishDescription"];
                $protein = $_POST["dishProtein"];
                $type = $_POST["dishType"];

                if ($type == "") {
                    echo "<h2>Please select a dish type!</h2>";
                    echo "<a href='addDishApplication.php'>Back</a>";
                    exit();
                }

                if (isset($_POST["addBtn"])) {
                    // Check if dish is already in database
                    $check = mysqli_query($conn, "SELECT * FROM Food WHERE name='$name'");
                    while ($checkResult = mysqli_fetch_array($check)) {
                        if ($checkResult["name"] == $name) {
                            echo "<h2>Dish is already in database!</h2>";
                            echo "<button onclick=\"window.location.href = 'addDishApplication.php';\">Back</button><br>";
                            exit();
                        }
                    }
                    
                    $maxID = mysqli_query($conn, "SELECT MAX(id) FROM Food");
                    $maxResult = mysqli_fetch_object($maxID);
                    $maxResult = $maxResult->{"MAX(id)"} + 1;

                    $insert = "INSERT INTO Food VALUES ($maxResult, '$name', $price, '$image', '$description', $protein, '$type')";
                    mysqli_query($conn, $insert);

                    echo "<h2>Dish has been added to the database.</h2>";
                    echo "<button onclick=\"window.location.href = 'adminPage.php';\">Main Menu</button><br>";
                } else {
                    echo "<h2>Failed to add dish to database!!!</h2>";
                    echo "<button onclick=\"window.location.href = 'addDishApplication.php';\">Back</button><br>";
                }
            ?>
            </div>
        </div>
    </body>
</html>