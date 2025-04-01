<?php

function fake_bin(string $s)
{
    $strSlit = str_split($s);

    $strNew = array_map(function ($str) {
        return (int) $str < 5 ? 0 : 1 ;
    }, $strSlit);

    return implode('', $strNew);
}

var_dump(fake_bin('45385593107843568'));
