<?php
$starter = $_GET['starter'];
$dessert = $_GET['dessert'];
if ($starter == '' || $dessert == '') {
    echo '<script>alert("Please select a starter and a dessert");</script>';
    echo '<script>window.location.href="index.html";</script>';
    // exit;
} else {

    echo "Starter : " . "<br>";
    echo "<ul>";
    for ($i = 0; $i < count($starter); $i++) {
        echo "<li>" . $starter[$i] . "<br/>" . "</li>";
    }
    echo "</ul>";


    echo "Dessert : " . "<br>";
    echo "<ul>";

    for ($j = 0; $j < count($dessert); $j++) {
        echo "<li>" . $dessert[$j] . "<br/>" . "</li>";
    }
    echo "</ul>";
}
