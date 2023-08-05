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
    <title>admin Page</title>
    <link rel="stylesheet" href="../public/css/adminStyles.css" />
</head>
<body>
    <div class="left">
        <div class="header-layer">
            <h1>Welcome back, admin</h1>
        </div>
        <div class = "menu">
            <button onclick="window.location.href = 'addDish.php';">Add Dishes</button><br>
            <button onclick="window.location.href = 'editDish.php';">Edit Dishes</button><br>
            <button onclick="window.location.href = 'deleteDish.php';">Delete Dishes</button><br>
            <button onclick="window.location.href = 'addCombo.php';">Add Combo</button><br>
            <button onclick="window.location.href = 'generateReport.php';">Generate Report</button><br>
            
            <button onclick="window.location.href = 'logoutPage.php';">Logout</button>
        </div>
    </div>
    <div class="right">
        <img src="../public/assets/header.png" alt="header" />
    </div>
</body>
</html>