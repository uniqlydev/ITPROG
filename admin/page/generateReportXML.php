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
            Generate Report XML
        </title>
        <link rel="stylesheet" href="generateReportXMLStyle.css">
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
                    $startDate = $_POST["startDate"];
                    $endDate = $_POST["endDate"];
                    $totalDishesSold = $_POST["totalDishesSold"];
                    $totalAmount = $_POST["totalAmount"];
                    $totalDiscount = $_POST["totalDiscount"];
                    $fileName = $_POST["fileName"];

                    if (strpos($fileName, '.xml') !== false) {
                        // echo 'true';
                    } else {
                        $fileName = $fileName . ".xml";
                    }

                    if (isset($_POST["generateReportBtn"])) {
                        if (file_exists($fileName)) {
                            echo "<h1>File already exists!</h1>";
                            echo "<button onclick='window.location.href = \"generateReport.php\";'>Back</button>";
                            exit();
                        } else {
                            $reports = new SimpleXMLElement("<reports></reports>");
                            $report = $reports->addChild("report");
                            $report->addChild("startDate", $startDate);
                            $report->addChild("dishesSold", $totalDishesSold);
                            $report->addChild("totalAmount", $totalAmount);
                            $report->addChild("totalDiscount", $totalDiscount);
                            $report->addChild("endDate", $endDate);

                            file_put_contents($fileName, $reports->asXML());

                            echo "<h1>Report XML file generated successfully!</h1>";
                            echo "<button onclick='window.location.href = \"adminPage.php\";'>Main Menu</button>";
                        }
                    }
                ?>
            </div>
        </div>
    </body>
</html>