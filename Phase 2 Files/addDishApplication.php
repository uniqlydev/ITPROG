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
            Add Dishes via Application
        </title>
    </head>

    <body>
        <h1>Add Dishes via Application</h1>
        <form method="post" action="addDishApplicationConfirm.php">
            <?php
                echo "<input type='text' name='dishName' placeholder='Dish Name' required/> <br /><br />";
                echo "<input type='text' name='dishPrice' placeholder='Dish Price' required/> <br /><br />";
                echo "<input type='text' name='dishImage' placeholder='Dish Image URL' required/> <br /><br />";
                echo "<input type='text' name='dishDescription' placeholder='Dish Description' required/> <br /><br />";
                echo "<input type='text' name='dishProtein' placeholder='Dish Protein' required/> <br /><br />";
                echo "<select name='dishType'>";
                echo "<option value=''>Select Dish Type</option>";
                echo "<option value='M'>Main Dish</option>";
                echo "<option value='S'>Side Dish</option>";
                echo "<option value='D'>Drink</option>";
                echo "</select> <br /><br />";

                echo "<input type='submit' value='Add Dish' name='addBtn'/>";
            ?>
        </form>
        <a href="addDish.php">Back</a>
    </body>
</html>