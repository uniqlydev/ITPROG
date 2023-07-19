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
            Add Dish
        </title>
    </head>

    <body>
        <h1>Add Dishes</h2>
        <a href="addDishApplication.php">Web Application</a> <br />
        <a href="addDishXML.php">XML</a> <br /> <br />
        <a href="adminPage.php">Go back</a> <br />
    </body>
</html>