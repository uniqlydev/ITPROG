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
            Edit Dishes Confirm
        </title>
    </head>

    <body>
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
    </body>
</html>