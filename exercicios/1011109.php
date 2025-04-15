<?php
function countBits(int $n)
{
    
    $binary = decbin($n);
    $arr = str_split($binary);
    $arr = array_filter($arr, function ($char) {
        return $char === "1";
    });


    return count($arr);
}

var_dump(countBits(1234));
