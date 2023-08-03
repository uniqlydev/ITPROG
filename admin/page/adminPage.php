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
    <link rel="stylesheet" href="../css/adminPage.css" />
</head>
<body>
    <div class="Menu-container">
        <div class="header-layer">
            <h1>Animo<span>Bites</span></h1>
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
</body>
</html>