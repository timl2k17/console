<?php
$mysqli = new mysqli("localhost", "weewx", "weewx", "meso");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

$res = $mysqli->query("SELECT outTemp, outHumidity, inTemp, inHumidity, barometer*33.8639, heatindex, dewpoint FROM raw_mysql ORDER BY dateTime DESC");
$row = $res->fetch_assoc();
echo json_encode($row);
?>
