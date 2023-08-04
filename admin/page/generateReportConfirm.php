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
        <link rel="stylesheet" href="generateReportConfirmStyle.css">
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
                <?php
                    function parseEnv($path) {
                        $contents = file_get_contents($path);
                        $lines = explode("\n", $contents);
                        $env = [];
                
                        foreach ($lines as $line) {
                            if (strpos($line, '=') !== false) {
                                list($key, $value) = explode('=', $line, 2);
                                $env[$key] = trim($value);
                            }
                        }
                
                        return $env;
                    }

                    $startDate = $_POST["startDate"];
                    $endDate = $_POST["endDate"];

                    $startDate = strtotime($startDate);
                    $startDate = date('Y-m-d', $startDate);

                    $endDate = strtotime($endDate);
                    $endDate = date('Y-m-d', $endDate);

                    echo "<h1>Generate Report Confirmation</h1>";

                    $env = parseEnv(__DIR__ . '/../.env'); 

                    $conn = mysqli_connect($env['DB_HOST'], $env['DB_USER'], $env['DB_PASS']) or die ("Unable to Connect". mysqli_error($dbconnect));
                    $use = mysqli_select_db($conn, $env['DB_NAME']);

                    $totalDishesSold = 0;
                    $totalAmount = 0;
                    $totalDiscount = 0;

                    $query = "SELECT * FROM Customer WHERE date BETWEEN '$startDate' AND '$endDate'";
                    $check = mysqli_query($conn, $query);

                    // Show in table format
                    echo "<table>";
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

                    echo "<br />";
                    echo "<br />";

                    echo "<table>";
                        echo "<tr>";
                        echo "<th>Start Date</th>";
                        echo "<th>Dishes Sold</th>";
                        echo "<th>Total Amount</th>";
                        echo "<th>Total Discount</th>";
                        echo "<th>End Date</th>";
                        echo "</tr>";

                        echo "<tr>";
                        echo "<th>".$startDate."</th>";
                        echo "<th>".$totalDishesSold."</th>";
                        echo "<th>".$totalAmount."</th>";
                        echo "<th>".$totalDiscount."</th>";
                        echo "<th>".$endDate."</th>";
                        echo "</tr>";
                    echo "</table>";

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
            </div>
        </div>
    </body>
</html>