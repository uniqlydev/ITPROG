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
        <link rel="stylesheet" href="editDishConStyle.css">
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

                    $name = $_POST["dishName"];
                    $price = $_POST["dishPrice"];
                    $image = $_POST["dishImage"];
                    $description = $_POST["dishDescription"];
                    $protein = $_POST["dishProtein"];
                    $type = $_POST["dishType"];

                    if ($type == "") {
                        echo "<h2>Please select a dish type!</h2>";
                        echo "<a href='editDish.php'>Back</a>";
                        exit();
                    }

                    if (isset($_POST["editBtn"])) {
                        $updateQuery = "UPDATE Food SET price=$price, image='$image', description='$description', protein=$protein, type='$type' WHERE name='$name'";
                        mysqli_query($conn, $updateQuery);

                        echo "<h2>Dish has been successfully edited.</h2>";
                        echo "<a href='adminPage.php'>Main Menu</a>";
                    } else {
                        echo "<h2>Failed to edit dish!!!</h2>";
                        echo "<a href='editDish.php'>Back</a>";
                    }
                ?>
            </div>
        </div>
    </body>
</html>