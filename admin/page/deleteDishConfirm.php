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
            Delete Dishes Confirmation
        </title>
        <link rel="stylesheet" href="delDishConStyle.css">
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

                    $dishID = $_POST["dishID"];

                    $check = mysqli_query($conn, "SELECT * FROM Food WHERE id='$dishID'");
                    $checkResult = mysqli_fetch_array($check);
                    if ($checkResult["id"] != $dishID) {
                        echo "<h2>Dish does not exist!</h2>";
                        echo "<a href='deleteDish.php'>Back</a>";
                        exit();
                    }

                    if(isset($_POST["deleteBtn"])){
                        $delete = "DELETE FROM Food WHERE id='$dishID'";
                        mysqli_query($conn, $delete);

                        echo "<h2>Record has been successfully deleted!</h2>";
                        echo "<a href='adminPage.php'>Back</a>";
                    } else {
                        echo "<h2>Failed to delete record!!!</h2>";
                        echo "<a href='deleteDish.php'>Back</a>";
                    }
                ?>
            </div>
    </body>
</html>