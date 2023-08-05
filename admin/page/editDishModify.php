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
            Edit Dishes
        </title>
        <link rel="stylesheet" href="editDishModifyStyle.css">
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
                <h1> Edit Dishes </h1>
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

                    $dish = $_POST["dish"];

                    echo "<h3>Now editing: ".$dish."</h3>";

                    $dishQuery = mysqli_query($conn, "SELECT * FROM Food WHERE name='$dish'");
                    $dishResult = mysqli_fetch_array($dishQuery);

                    echo "<form method='post' action='editDishModifyConfirm.php'>";
                    echo "<input type='hidden' name='dishName' value='".$dishResult['name']."' required />";
                    echo "<input type='text' name='dishPrice' placeholder='".$dishResult['price']."' required /> <br /><br />";
                    echo "<input type='text' name='dishImage' placeholder='".$dishResult['image']."' required /> <br /><br />";
                    echo "<input type='text' name='dishDescription' placeholder='".$dishResult['description']."' required /> <br /><br />";
                    echo "<input type='text' name='dishProtein' placeholder='".$dishResult['protein']."' required /> <br /><br />";
                    echo "<select name='dishType'>";
                    echo "<option value=''>Select Dish Type</option>";
                    echo "<option value='M'>Main Dish</option>";
                    echo "<option value='S'>Side Dish</option>";
                    echo "<option value='D'>Drink</option>";
                    echo "</select> <br /><br />";

                    echo "<button type='submit' value='Edit Dish' name='editBtn'> Edit Dish </button>";
                ?>
            <br /><br />
        </div>
    </div>
    </body>
</html>