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
            Add Combo
        </title>
        <link rel="stylesheet" href="../public/css/addComboStyles.css">
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
                <h1> Add Combo </h1>
                <form method="post" action="addComboConfirm.php">
                    <?php
                        echo "<input type='text' name='comboName' placeholder='Combo Name' required /> <br /><br />";
                        echo "<input type='text' name='comboDiscount' placeholder='Combo Discount' required /> <br /><br />";

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

                        $mainQuery = mysqli_query($conn, "SELECT * FROM Food WHERE type='M'");
                        $sideQuery = mysqli_query($conn, "SELECT * FROM Food WHERE type='S'");
                        $drinkQuery = mysqli_query($conn, "SELECT * FROM Food WHERE type='D'");

                        echo "<select name='comboMain'>";
                        echo "<option value=''>Select Main Dish</option>";
                        while ($mainResult = mysqli_fetch_array($mainQuery)) {
                            echo "<option value='".$mainResult["name"]."'>".$mainResult["name"]."</option>";
                        }
                        echo "</select> <br /><br />";

                        echo "<select name='comboSide'>";
                        echo "<option value=''>Select Side Dish</option>";
                        while ($sideResult = mysqli_fetch_array($sideQuery)) {
                            echo "<option value='".$sideResult["name"]."'>".$sideResult["name"]."</option>";
                        }
                        echo "</select> <br /><br />";

                        echo "<select name='comboDrink'>";
                        echo "<option value=''>Select Drink</option>";
                        while ($drinkResult = mysqli_fetch_array($drinkQuery)) {
                            echo "<option value='".$drinkResult["name"]."'>".$drinkResult["name"]."</option>";
                        }
                        echo "</select> <br /><br />";

                        echo "<button type='submit' value='Add Combo' name='addComboBtn'> Add Combo </button>";
                    ?>
                </form>
            </div>
        </div>
    </body>
</html>