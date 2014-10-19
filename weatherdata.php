<?php
$url = 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=54.063430399999994%2C+-2.7973965999999564&format=json&num_of_days=5&key=jgbwmyy23kdzk9s9etjdm7n6';
$result = file_get_contents($url);
$obj = json_decode($result);
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
echo json_encode($obj, JSON_PRETTY_PRINT);
// http://www.sencha.com/forum/showthread.php?141367-Pass-geo-coordinates-to-ajax-post-request
?>
