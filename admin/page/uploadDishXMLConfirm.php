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
    <link rel="stylesheet" href="uploadDishXMLConfirmStyles.css">
</head>
    <body>
        <div class="main-menu">
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
        <div class="Menu-container">
            <div class = "menu1">
            <?php
                if (isset($_POST["uploadBtn"])) {
                    echo "<h2>Upload Dishes via XML Confirmation</h2>";
                    
                    $target_dir = "../uploads/";
                    $target_file = $target_dir . basename($_FILES["file"]["name"]);

                    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                        echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
                        echo "<br /><br />";
                        $success = true;
                        echo "<br /><br />";
                    } else {
                        echo "Sorry, there was an error uploading your file.";
                        echo "<br /><br />";
                        $success = false;
                        echo "<br /><br />";
                    }

                    rename($target_file, "../uploads/dishes.xml");
                }

                // View XML data in table format
                if ($success) {
                    echo "<form method='post' action='uploadDishXMLDatabase.php'>";
                        $dishes = simplexml_load_file("../uploads/dishes.xml") or die("Error: Cannot create object");

                        echo "<table>";
                        echo "<tr>";
                        echo "<th>Dish ID</th>";
                        echo "<th>Dish Name</th>";
                        echo "<th>Dish Price</th>";
                        echo "<th>Dish Image</th>";
                        echo "<th>Dish Description</th>";
                        echo "<th>Dish Protein</th>";
                        echo "<th>Dish Type</th>";
                        echo "</tr>";
                    
                        foreach ($dishes->dish as $dish) {
                            echo "<tr>";
                            echo "<td>" . $dish->id . "</td>";
                            echo "<td>" . $dish->name . "</td>";
                            echo "<td>" . $dish->price . "</td>";
                            echo "<td>" . $dish->image . "</td>";
                            echo "<td>" . $dish->description . "</td>";
                            echo "<td>" . $dish->protein . "</td>";
                            echo "<td>" . $dish->type . "</td>";
                            echo "</tr>";
                        }
                        echo "</table>";
                        echo "<br /><br />";
                        echo "<button type='submit' name='uploadBtn' value='Upload to Database' >Upload to Database </button><br /><br />";
                        echo "<button onclick='window.location.href = \"addDish.php\";'>Back</button>";
                    echo "</form>";
                }
            ?>
            </div>
        </div>
    </body>
</html>