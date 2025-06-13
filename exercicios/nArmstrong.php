<?php


function nArmstrong(int $n)
{
    $len = strlen((string) $n);

    $list = str_split((string) $n);

    $list = array_map( function($char) use($len){
        return (int) $char ** $len;
    }, $list);

    return array_sum($list) === $n;
}

var_dump(nArmstrong(153));
