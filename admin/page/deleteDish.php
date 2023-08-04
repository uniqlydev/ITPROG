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
            Delete Dishes
        </title>
        <link rel="stylesheet" href="deleteDishStyle.css">
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
            <div class = "menu1">
                <h1> Delete Dishes </h1>
                <form method="post" action="deleteDishConfirm.php">
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

                        echo "<select name='dishID'>";
                        while ($dishResult = mysqli_fetch_array($dishQuery)) {
                            echo "<option value='".$dishResult['id']."'>".$dishResult['name']."</option>";
                        }
                        echo "</select>";
                    ?>

                    <br/><br/>
                    <button type="submit" value="Delete" name="deleteBtn"> Delete </button>
                </form>
            </div>
        </div>
    </body>
</html>