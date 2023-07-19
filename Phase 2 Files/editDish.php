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
            Edit Dishes
        </title>
    </head>

    <body>
        <h1>Edit Dishes</h1>
        <form method="post" action="editDishModify.php">
            <?php
                $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
                mysqli_select_db($conn, "dbanimoeats");

                $dishQuery = mysqli_query($conn, "SELECT * FROM Food");

                echo "<select name='dish'>";
                while ($dishResult = mysqli_fetch_array($dishQuery)) {
                    echo "<option value='".$dishResult['name']."'>".$dishResult['name']."</option>";
                }
                echo "</select>";
            ?>
            <br/><br/>
            <input type="submit" value="Edit" name="editBtn"/>
        </form>
        <a href="adminPage.php">Back</a>
    </body>
</html>