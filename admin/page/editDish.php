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
            Edit Dishes
        </title>
        <link rel="stylesheet" href="editDishStyle.css">
    </head>

    <body>
        <div class="Menu-container">
            <div class="header-layer">
                <h1>Animo<span>Bites</span></h1>
            </div>
            <div class = "menu">
                <div class="header-layerB">
                    <h1>Edit <span>Dishes</span></h1>
                </div>
                <form method="post" action="editDishModify.php">
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
                        mysqli_select_db($conn, $env['DB_NAME']);

                        $dishQuery = mysqli_query($conn, "SELECT * FROM Food");

                        echo "<select name='dish'>";
                        while ($dishResult = mysqli_fetch_array($dishQuery)) {
                            echo "<option value='".$dishResult['name']."'>".$dishResult['name']."</option>";
                        }
                        echo "</select>";
                    ?>
                    <br/><br/>
                    <button type="submit" value="Edit" name="editBtn"> Edit </button>
                </form>
                <a href="adminPage.php">Back</a>
            </div>
        </div>
    </body>
</html>