<?php

function encryptThis($text)
{
    $str = explode(" ", $text);

     $str = array_map(function ($char) {
        $result = ord($char[0]);
        if (strlen($char) == 1) {
            return $result;
        }
        
        if (strlen($char) === 2) {
            return $result . $char[1];
        }
        
        $first = $result;
        $second = $char[1];
        $last = $char[strlen($char) - 1];
        $middle = substr($char, 2, -1);

        return $first . $last . $middle. $second;
    }, $str);
    
    return implode(" ", $str);
}



var_dump(encryptThis("hello world"));// "104olle 119drlo"