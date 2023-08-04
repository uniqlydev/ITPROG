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
            Generate Report
        </title>
        <link rel="stylesheet" href="generateReportStyle.css">
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
            <div class="menu1">
                <h1>Generate Report</h1>
                <form method="post" action="generateReportConfirm.php">
                    <?php
                        echo "<h2>Start Date</h2>";
                        echo "<input type='date' name='startDate' placeholder='Start Date' required /> <br /><br />";
                        echo "<h2>End Date</h2>";
                        echo "<input type='date' name='endDate' placeholder='End Date' required /> <br /><br />";
                        echo "<input type='submit' value='Generate Report' name='generateReportBtn'/>";
                    ?>
                </form>
            </div>
        </div>
    </body>
</html>