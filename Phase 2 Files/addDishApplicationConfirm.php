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
            Confirm Dishes via Application
        </title>
        <link rel="stylesheet" href="addDishConStyle.css">
    </head>

    <body>
        <div class="Menu-container">
            <div class="header-layer">
                <h1>Animo<span>Bites</span></h1>
            </div>
            <div class = "menu">
            <?php
                $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
                $use = mysqli_select_db($conn, "dbanimoeats");

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
                            echo "<a href='addDishApplication.php'>Back</a>";
                            exit();
                        }
                    }
                    
                    $maxID = mysqli_query($conn, "SELECT MAX(id) FROM Food");
                    $maxResult = mysqli_fetch_object($maxID);
                    $maxResult = $maxResult->{"MAX(id)"} + 1;

                    $insert = "INSERT INTO Food VALUES ($maxResult, '$name', $price, '$image', '$description', $protein, '$type')";
                    mysqli_query($conn, $insert);

                    echo "<h2>Dish has been added to the database.</h2>";
                    echo "<a href='adminPage.php'>Main Menu</a>";
                } else {
                    echo "<h2>Failed to add dish to database!!!</h2>";
                    echo "<a href='addDishApplication.php'>Back</a>";
                }
            ?>
        </div>
    </body>
</html>