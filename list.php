<?php
$starter = $_GET['starter'];
$starter1 = $_GET['starter1'];
$starter2 = $_GET['starter2'];
$dessert = $_GET['dessert'];
echo "<html><head><title>Order</title>";
echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>

function generatePDF() {
    const element = document.getElementById("invoice");
    html2pdf().from(element).save();
}
</script>';
echo '</head><body><h3><div id="invoice">';

if ($starter == []) {
    echo '<script>alert("Please select a starter and a dessert");</script>';
    echo '<script>window.location.href="index.html  ";</script>';
    // exit;
} else {
    echo "<table>";
    echo "<tr>";
    echo "<th><u>Starter</u></th>";
    echo "<td>" . "&nbsp" . "&nbsp" . "&nbsp" . "&nbsp" . "</td>";
    echo "<th><u>Dessert</u></th>";
    echo "<td>" . "&nbsp" . "&nbsp" . "&nbsp" . "&nbsp" . "</td>";
    echo "<th><u>Starter1</u></th>";
    echo "<td>" . "&nbsp" . "&nbsp" . "&nbsp" . "&nbsp" . "</td>";
    echo "<th><u>Starter2</u></th>";
    echo "</tr>";
    $count = count($starter);
    if ($count < count($dessert)) {
        $count = count($dessert);
    }
    if ($count < count($starter1)) {
        $count = count($starter1);
    }
    if ($count < count($starter2)) {
        $count = count($starter2);
    }

    for ($i = 0; $i < $count; $i++) {
        echo "<tr>";
        if (count($starter) > $i) {
            echo "<td>" . $starter[$i] . "</td>";
        } else {
            echo "<td>" . "&nbsp" . "</td>";
        }

        echo "<td>" . "&nbsp" . "&nbsp" . "&nbsp" . "&nbsp" . "</td>";

        if (count($dessert) > $i) {
            echo "<td>" . $dessert[$i] . "</td>";
        } else {
            echo "<td>" . "&nbsp" . "</td>";
        }

        echo "<td>" . "&nbsp" . "&nbsp" . "&nbsp" . "&nbsp" . "</td>";

        if (count($starter1) > $i) {
            echo "<td>" . $starter1[$i] . "</td>";
        } else {
            echo "<td>" . "&nbsp" . "</td>";
        }

        echo "<td>" . "&nbsp" . "&nbsp" . "&nbsp" . "&nbsp" . "</td>";

        if (count($starter2) > $i) {
            echo "<td>" . $starter2[$i] . "</td>";
        } else {
            echo "<td>" . "&nbsp" . "</td>";
        }
        echo "</tr>";
    }


    // echo "<tr>";


    // echo "</tr>";


    // echo "<tr>";
    // for ($i = 0; $i < count($starter1); $i++) {
    //     echo "<td>" . $starter1[$i] . "</td>";
    // }
    // echo "</tr>";


    // echo "<tr>";
    // for ($i = 0; $i < count($starter2); $i++) {
    //     echo "<td>" . $starter2[$i] . "</td>";
    // }
    // echo "</tr>";
    echo "</table>";
}
echo '</div></h3><button onclick="generatePDF()">Download as PDF</button></body></html>';
