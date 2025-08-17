<?php
    session_start();
    if (!isset($_SESSION["getLogin"])) {
        header("location:loginPage.php");
    } else {
    }
?>

<html>
    <head>
        <title>
            Add Combo Confirmation
        </title>
        <link rel="stylesheet" href="addComboConStyle.css">
    </head>

    <body>
    <div class="Menu-container">
            <div class="header-layer">
                <h1>Animo<span>Bites</span></h1>
            </div>
            <div class = "menu">
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

                    $name = $_POST["comboName"];
                    $discount = $_POST["comboDiscount"];
                    $main = $_POST["comboMain"];
                    $side = $_POST["comboSide"];
                    $drink = $_POST["comboDrink"];

                    if ($main == "" || $side == "" || $drink == "") {
                        echo "<h2>Please select a dish for each category!</h2>";
                        echo "<a href='addCombo.php'>Back</a>";
                        exit();
                    }  

                    if (isset($_POST["addComboBtn"])) {
                        // Check if combo is already in database
                        $check = mysqli_query($conn, "SELECT * FROM ComboMeals WHERE name='$name'");
                        while ($checkResult = mysqli_fetch_array($check)) {
                            if ($checkResult["name"] == $name) {
                                echo "<h2>Combo is already in database!</h2>";
                                echo "<a href='addCombo.php'>Back</a>";
                                exit();
                            }
                        }

                        $maxID = mysqli_query($conn, "SELECT MAX(id) FROM ComboMeals");
                        $maxResult = mysqli_fetch_object($maxID);
                        $maxResult = $maxResult->{"MAX(id)"} + 1;

                        $insert = "INSERT INTO ComboMeals VALUES ($maxResult, '$name', $discount, '$main', '$side', '$drink')";
                        mysqli_query($conn, $insert);

                        echo "<h2>Combo has been added to the database.</h2>";
                        echo "<a href='adminPage.php'>Main Menu</a>";
                    } else {
                        echo "<h2>Failed to add combo to database!!!</h2>";
                        echo "<a href='addCombo.php'>Back</a>";
                    }
                ?>
            </div>
    </body>
</html>