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
            Delete Dishes Confirmation
        </title>
    </head>

    <body>
        <?php
            $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
            $use = mysqli_select_db($conn, "dbanimoeats");

            $dishID = $_POST["dishID"];

            $check = mysqli_query($conn, "SELECT * FROM Food WHERE id='$dishID'");
            $checkResult = mysqli_fetch_array($check);
            if ($checkResult["id"] != $dishID) {
                echo "<h2>Dish does not exist!</h2>";
                echo "<a href='deleteDish.php'>Back</a>";
                exit();
            }

            if(isset($_POST["deleteBtn"])){
                $delete = "DELETE FROM Food WHERE id='$dishID'";
                mysqli_query($conn, $delete);

                echo "<h2>Record has been successfully deleted!</h2>";
                echo "<a href='adminPage.php'>Back</a>";
            } else {
                echo "<h2>Failed to delete record!!!</h2>";
                echo "<a href='deleteDish.php'>Back</a>";
            }
        ?>
    </body>
</html>