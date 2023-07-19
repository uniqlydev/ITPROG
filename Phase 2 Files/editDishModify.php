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
    </head>

    <body>
        <?php
            $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
            mysqli_select_db($conn, "dbanimoeats");

            $dish = $_POST["dish"];

            echo "<h1>Edit Dishes</h1>";
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

            echo "<input type='submit' value='Edit Dish' name='editBtn'/>";
        ?>
        <br /><br />
        <a href="editDish.php">Back</a>
    </body>
</html>