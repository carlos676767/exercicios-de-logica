<?php



function accum($s)
{
    $strSplit = str_split( $s );
    $str = array_map(fn($char, $i) => str_repeat($char, $i + 1), $strSplit,  array_keys($strSplit));

    $list = array_map(fn($char) => strtoupper($char[0]) . substr($char, 1), $str);

    return implode("-", $list);
}

var_dump(accum("abcd"));
