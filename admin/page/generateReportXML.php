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
    </head>

    <body>
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
                    echo "<a href='generateReport.php'>Back</a>";
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
                    echo "<a href='generateReport.php'>Back</a>";
                }
            }
        ?>
    </body>
</html>