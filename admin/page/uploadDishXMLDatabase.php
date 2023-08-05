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
            Confirm Dishes via XML
        </title>
        <link rel="stylesheet" href="../public/css/uploadDishXMLDatabaseStyle.css">
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
                
                    $dishes = simplexml_load_file("../uploads/dishes.xml") or die("Error: Cannot create object");
                    foreach ($dishes->dish as $dish) {
                        $duplicate = false;

                        $name = $dish->name;
                        $price = $dish->price;
                        $image = $dish->image;
                        $description = $dish->description;
                        $protein = $dish->protein;
                        $type = $dish->type;

                        if (isset($_POST["uploadBtn"])) {
                            // Check if dish is already in database
                            $check = mysqli_query($conn, "SELECT * FROM Food WHERE name='$name'");
                            while ($checkResult = mysqli_fetch_array($check)) {
                                if ($checkResult["name"] == $name) {
                                    $duplicate = true;
                                    break;
                                }
                            }
                            
                            if (!$duplicate) {
                                $maxID = mysqli_query($conn, "SELECT MAX(id) FROM Food");
                                $maxResult = mysqli_fetch_object($maxID);
                                $maxResult = $maxResult->{"MAX(id)"} + 1;

                                $insert = "INSERT INTO Food VALUES ($maxResult, '$name', $price, '$image', '$description', $protein, '$type')";
                                mysqli_query($conn, $insert);

                                echo "<h2>Dish has been added to the database.</h2>";
                                echo "<button onclick='window.location.href = \"adminPage.php\";'>Main Menu</button>";
                            }
                        } else {
                            echo "<h2>Failed to add dish to database!!!</h2>";
                            echo "<button onclick='window.location.href = \"adminPage.php\";'>Main Menu</button>";
                        }
                    }
                ?>
            </div>
    </body>
</html>