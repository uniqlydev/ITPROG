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
    <title>Add Dishes via XML</title>
    <link rel="stylesheet" href="../public/css/uploadDishXMLStyle.css">
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
            <h2>Add Dishes via XML</h2>
            <div class="Submenu">
                <form method="post" action="uploadDishXMLConfirm.php" enctype="multipart/form-data">
                    <input type="file" name="file" id="file" accept=".xml" required>
                    <br>
                    <button type="submit" value="Upload XML File" name="uploadBtn">Upload XML File </button><br />
                    <button onclick="window.location.href = 'addDish.php';">Back</button>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>