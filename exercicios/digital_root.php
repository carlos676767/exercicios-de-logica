<?php
function digital_root($number)
{
    $str =  (string) ($number);


    $str = str_split($str);


    $str = array_map(function ($char) {
        return (int) $char;
    }, $str);


    $soma = array_reduce($str, function ($a, $b) {
        return $a + $b;
    }, 0);
    
    return $soma;
}


var_dump(digital_root(942));
