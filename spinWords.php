<?php

function spinWords(string $str)
{
    $explotStr = explode(' ', $str);
    $str = array_map(function ($char) {
        $defaultNumber = 5;

        if (strlen($char) >= $defaultNumber) {
            return strrev($char);
        }

        return $char;
    }, $explotStr);


    return implode(' ', $str);
}


var_dump(spinWords("Hey fellow warriors"));
