<?php
function pigIt($str){
    $str = explode(' ', $str);
    return join(' ', array_map(function($char){
        return substr($char, 1) . $char[0] . "ay";
    }, $str));
}

var_dump(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay