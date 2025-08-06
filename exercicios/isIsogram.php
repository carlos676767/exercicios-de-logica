<?php

function isIsogram($string): bool
{

    if (strlen($string) === 0) {
        return true;
    }
    $value = str_split(strtolower($string));

    $list = array_unique($value);
    sort($list);
    
    return strlen($string) === count($list);
}

var_dump(isIsogram("Dermatoglyphics"));
