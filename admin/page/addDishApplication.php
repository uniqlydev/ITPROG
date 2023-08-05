<?php
    session_start();
    if (!isset($_SESSION["getLogin"])) {
        header("location:../index.php");
    } else {
    }
?>

<html>
<head>
    <meta charset="UTF-8" />
    <title>Add Dish Page</title>
    <link rel="stylesheet" href="../public/css/addDishApplicationStyle.css">
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
            <h2>Add Dishes via Application</h2>
            <form method="post" action="addDishApplicationConfirm.php">
                <div class = "Submenu">
                    <?php
                        echo "<div class='input-field' id = 'user'>";
                        echo "<input type='text' name='dishName' placeholder='Dish Name' required/> <br /><br />";
                        echo "<input type='text' name='dishPrice' placeholder='Dish Price' required/> <br /><br />";
                        echo "<input type='text' name='dishImage' placeholder='Dish Image URL' required/> <br /><br />";
                        echo "<input type='text' name='dishDescription' placeholder='Dish Description' required/> <br /><br />";
                        echo "<input type='text' name='dishProtein' placeholder='Dish Protein' required/> <br /><br />";
                        echo "</div>";
                        echo "<select name='dishType'>";
                        echo "<option value=''>Select Dish Type</option>";
                        echo "<option value='M'>Main Dish</option>";
                        echo "<option value='S'>Side Dish</option>";
                        echo "<option value='D'>Drink</option>";
                        echo "</select> <br /><br />";

                        echo "<button type='submit' value='Add Dish' name='addBtn'>Submit</button";
                        
                    ?>
                </div>
            </form>
            <br>
            <button onclick="window.location.href = 'addDish.php';">Backs</button><br>
        </div>
    </div>
</body>
</html>