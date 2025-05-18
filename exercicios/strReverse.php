<?php

function solution(string $str)
{
    $splitStr = str_split($str);


    $reverseStr = array_reverse($splitStr);

    return join('', $reverseStr);
}



var_dump(solution('world'));
