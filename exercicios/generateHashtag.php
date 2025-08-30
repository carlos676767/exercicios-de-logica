<?php


function generateHashtag($str)
{
    
    $str = trim($str);

    if (strlen($str) >= 140 || ($str) == '' ) {
        return false;
    }
   
    
    $list = preg_split('/\s+/', $str);
    $str = array_map(function ($char) {

        return  strtoupper($char[0]) . strtolower(substr($char, 1));
    }, $list);
    
    $hash = '#'. implode('',$str);
    
    
    return strlen($hash) >= 140 ? false:  $hash;
}


var_dump(generateHashtag('CodeWars'));
