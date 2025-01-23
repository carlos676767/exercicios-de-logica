<?php

$response = file_get_contents('https://jsonplaceholder.typicode.com/posts');

$data = json_decode($response, true);

$bodies = array_column($data, 'body');

sort($bodies);

print_r($bodies);
