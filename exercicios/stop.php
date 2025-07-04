<?php



function spinWords(string $str) {
    $list = [];
    $splitStr = explode(' ', $str);


    $list = array_map(fn($st) => strlen($st) >= 5 ? strrev($st)  : $st, $splitStr);

    return implode(' ', $list);
}


var_dump(spinWords('Hey fellow warriors'));


