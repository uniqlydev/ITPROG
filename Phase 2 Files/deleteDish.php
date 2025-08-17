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
        <link rel="stylesheet" href="delDishStyle.css">
    </head>

    <body>
        <div class="Menu-container">
            <div class="header-layer">
                <h1>Animo<span>Bites</span></h1>
            </div>
            <div class = "menu">
                <div class="header-layerB">
                    <h1>Delete <span>Dishes</span></h1>
                </div>
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
                    <button type="submit" value="Delete" name="deleteBtn"> Delete </button>
                </form>
                <a href="adminPage.php">Back</a>
            </div>
        </div>
    </body>
</html>