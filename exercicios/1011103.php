<?php




function accum($s)
{
    $strSplit = str_split( $s );
    $str = array_map(fn($char, $i) => str_repeat($char, $i + 1), $strSplit,  array_keys($strSplit));

    $list = array_map(fn($char) => strtoupper($char[0]) . substr($char, 1), $str);

    return implode("-", $list);
}
//aprendi algo com a programacao que irei levar para toda minha vida.
//aprendi que por mais que algo pareca dificil ou ate mesmo impossivel
//la no final havera uma solucao , apenas precisamos de tempo.
var_dump(accum("abcd"));
