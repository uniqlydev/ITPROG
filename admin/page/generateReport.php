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
    </head>

    <body>
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
        <a href="adminPage.php">Back</a>
    </body>
</html>