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
            Add Dishes via XML
        </title>
    </head>

    <body>
        <h1>Add Dishes via XML</h1>
        <form method="post" action="uploadDishXMLConfirm.php" enctype="multipart/form-data">
            <input type="file" name="file" id="file" accept=".xml" required/> <br /><br />
            <input type="submit" value="Upload XML File" name="uploadBtn"/>
        </form>
    </body>
</html>