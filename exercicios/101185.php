<?php

function longest($a, $b) {
    $combined = str_split($a . $b);
    $uniqueValues = array_unique($combined);
    rsort($uniqueValues);
    
    return $uniqueValues;

}

var_dump(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));