<?php


function bump($x) {
    $x = strtolower($x);
    $x = str_split($x);
    
    $list = array_filter($x,function($char) {
        return $char == "n";
    });
    
    if(count($list) <= 15){
        return "Woohoo!";
    }
    
    return "Car Dead";
}