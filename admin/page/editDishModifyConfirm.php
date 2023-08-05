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
            Edit Dishes Confirm
        </title>
        <link rel="stylesheet" href="editDishModifyConfirmStyle.css">
    </head>

    <body>
        <div class="main-menu">
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
        <div class="Menu-container">
            <div class="menu1">
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
                        echo "<button onclick=\"window.location.href = 'editDish.php';\">Back</button>";
                        exit();
                    }

                    if (isset($_POST["editBtn"])) {
                        $updateQuery = "UPDATE Food SET price=$price, image='$image', description='$description', protein=$protein, type='$type' WHERE name='$name'";
                        mysqli_query($conn, $updateQuery);

                        echo "<h2>Dish has been successfully edited.</h2>";
                        echo "<button onclick=\"window.location.href = 'adminPage.php';\">Back</button>";
                    } else {
                        echo "<h2>Failed to edit dish!!!</h2>";
                        echo "<button onclick=\"window.location.href = 'editDish.php';\">Back</button>";
                    }
                ?>
            </div>
        </div>
    </body>
</html>