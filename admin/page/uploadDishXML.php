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
    <link rel="stylesheet" href="upDishXMLStyle.css">
</head>
<body>
    <div class="Menu-container">
        <div class="header-layer">
            <h1>Animo<span>Bites</span></h1>
        </div>
        <div class = "menu">
            <h2>Add Dishes via XML</h2>
            <div class = "Submenu">
                <form method="post" action="uploadDishXMLConfirm.php" enctype="multipart/form-data">
                    <input type="file" name="file" id="file" accept=".xml" required>
                    <br>
                   <button type="submit" value="Upload XML File" name="uploadBtn">Upload XML File </button>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>