<?php


function hasUniqueChars($string)
{

    $lowerString = (str_split($string));
    sort($lowerString);


    
    for ($i = 0; $i < count($lowerString) - 1; $i++) {
        $actual = $lowerString[$i];
        $next = $lowerString[$i + 1];
        if ($actual === $next) {
            return false;
        } else {
            return true;
        }
    }
}



var_dump(hasUniqueChars('abacdef'));
