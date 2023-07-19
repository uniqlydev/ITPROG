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
            Add Combo
        </title>
    </head>

    <body>
        <h1>Add Combo</h1>
        <form method="post" action="addComboConfirm.php">
            <?php
                echo "<input type='text' name='comboName' placeholder='Combo Name' required /> <br /><br />";
                echo "<input type='text' name='comboDiscount' placeholder='Combo Discount' required /> <br /><br />";

                $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
                $use = mysqli_select_db($conn, "dbanimoeats");

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

                echo "<input type='submit' value='Add Combo' name='addComboBtn'/>";
            ?>
        </form>
        <a href="adminPage.php">Back</a>
    </body>
</html>