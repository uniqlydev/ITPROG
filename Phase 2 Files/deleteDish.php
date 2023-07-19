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
            Delete Dishes
        </title>
    </head>

    <body>
        <h1>Delete Dishes</h1>
        <form method="post" action="deleteDishConfirm.php">
            <?php
                $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
                mysqli_select_db($conn, "dbanimoeats");

                $dishQuery = mysqli_query($conn, "SELECT * FROM Food");

                echo "<select name='dishID'>";
                while ($dishResult = mysqli_fetch_array($dishQuery)) {
                    echo "<option value='".$dishResult['id']."'>".$dishResult['name']."</option>";
                }
                echo "</select>";
            ?>

            <br/><br/>
            <input type="submit" value="Delete" name="deleteBtn"/>
        </form>
        <a href="adminPage.php">Back</a>
    </body>
</html>