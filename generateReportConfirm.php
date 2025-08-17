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
            Generate Report Confirm
        </title>
    </head>

    <body>
        <?php
            $startDate = $_POST["startDate"];
            $endDate = $_POST["endDate"];

            $startDate = strtotime($startDate);
            $startDate = date('Y-m-d', $startDate);

            $endDate = strtotime($endDate);
            $endDate = date('Y-m-d', $endDate);

            echo "<h1>Generate Report Confirm</h1>";
            echo "<h2>Start Date</h2>";
            echo "<p>" . $startDate . "</p>";
            echo "<h2>End Date</h2>";
            echo "<p>" . $endDate . "</p>";

            $conn = mysqli_connect("localhost", "root", "") or die ("Unable to connect". mysqli_error($conn));
            $use = mysqli_select_db($conn, "dbanimoeats");

            $totalDishesSold = 0;
            $totalAmount = 0;
            $totalDiscount = 0;

            $query = "SELECT * FROM Customer WHERE date BETWEEN '$startDate' AND '$endDate'";
            $check = mysqli_query($conn, $query);

            // Show in table format
            echo "<table border='1'>";
            echo "<tr>";
            echo "<th>ID</th>";
            echo "<th>Name</th>";
            echo "<th>Date of Purchase</th>";
            echo "<th>Dishes Bought</th>";
            echo "<th>Total</th>";
            echo "<th>Discount</th>";
            echo "</tr>";
            while ($result = mysqli_fetch_array($check)) {
                echo "<tr>";
                echo "<td>" . $result["id"] . "</td>";
                echo "<td>" . $result["uname"] . "</td>";
                echo "<td>" . $result["date"] . "</td>";
                echo "<td>" . $result["mquan"] . " x " . $result["main"] . "<br />" . $result["squan"] . " x " . $result["sides"] . "<br />" . $result["dquan"] . " x  ". $result["drinks"] . "</td>";
                echo "<td>" . $result["total"] . "</td>";
                echo "<td>" . $result["discount"] . "</td>";
                $totalDishesSold += $result["mquan"] + $result["squan"] + $result["dquan"];
                $totalAmount += $result["total"];
                $totalDiscount += $result["discount"];
            }
            echo "</table>";

            echo "<h2>Total Dishes Sold</h2>";
            echo "<p>" . $totalDishesSold . "</p>";
            echo "<h2>Total Amount</h2>";
            echo "<p>" . $totalAmount . "</p>";
            echo "<h2>Total Discount</h2>";
            echo "<p>" . $totalDiscount . "</p>";

            echo "<form method='post' action='generateReportXML.php'>";
            echo "<input type='hidden' name='startDate' value='$startDate' />";
            echo "<input type='hidden' name='endDate' value='$endDate' />";
            echo "<input type='hidden' name='totalDishesSold' value='$totalDishesSold' />";
            echo "<input type='hidden' name='totalAmount' value='$totalAmount' />";
            echo "<input type='hidden' name='totalDiscount' value='$totalDiscount' />";
            echo "<h2>File Name</h2>";
            echo "<input type='text' name='fileName' placeholder='File Name' required /> <br /><br />";
            echo "<button type='submit' name='generateReportBtn'>Generate Report</button>";
        ?>
    </body>
</html>