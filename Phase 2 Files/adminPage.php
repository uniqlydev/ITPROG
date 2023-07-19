<?php
    session_start();
    if (!isset($_SESSION["getLogin"])) {
        header("location:loginPage.php");
    } else {
    }
?>

<html>
    <head>
        <meta charset="UTF-8" />
        <title>Admin Page</title>
    </head>
    <body>
        <h1>Admin Page</h1>
        <a href="addDish.php">Add Dishes</a> <br />
        <a href="editDish.php">Edit Dishes</a> <br />
        <a href="deleteDish.php">Delete Dishes</a> <br />
        <a href="addCombo.php">Add Combo</a> <br />
        <a href="generateReport.php">Generate Report</a> <br /> <br />

        <a href="logoutPage.php">Logout</a>
    </body>
</html>