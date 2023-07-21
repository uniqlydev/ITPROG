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
            Confirm Dishes via XML
        </title>
    </head>

    <body>
        <?php
            $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
            $use = mysqli_select_db($conn, "dbanimoeats");
        
            $dishes = simplexml_load_file("uploads/dishes.xml") or die("Error: Cannot create object");
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

                        echo "<h2>Dish has been successfully added to the database.</h2>";
                        echo "<a href='adminPage.php'>Main Menu</a>";
                    }
                } else {
                    echo "<h2>Failed to add dish to database!!!</h2>";
                    echo "<a href='uploadDishXML.php'>Back</a>";
                }
            }
        ?>
    </body>
</html>