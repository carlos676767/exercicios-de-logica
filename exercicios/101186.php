<?php

function longest($a, $b) {
    $combined = str_split($a . $b);
    $uniqueValues = array_unique($combined);
    sort($uniqueValues);
    
    return implode("", $uniqueValues);

}

var_dump(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));