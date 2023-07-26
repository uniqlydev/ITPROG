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
    <title>Add Dish Menu Page</title>
    <link rel="stylesheet" href="addDishStyle.css">
</head>
<body>
    <div class="Menu-container">
        <div class="header-layer">
            <h1>Animo<span>Bites</span></h1>
        </div>
        <div class = "menu">
            <div class="header-layerB">
                <h1>Add<span>Dish</span></h1>
            </div>
            <button onclick="window.location.href = 'addDishApplication.php';">Web Application</button><br>
            <button onclick="window.location.href = 'uploadDishXML.php';">XML</button><br>
            <button onclick="window.location.href = 'adminPage.php';">Go Back</button><br>
        </div>
    </div>

    <?php
         
    ?>
</body>
</html>