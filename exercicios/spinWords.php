<?php
  
function spinWords(string $str) {
    $result = explode(" ", $str);
    
    $result = array_map(function($char){
        if(strlen($char) >= 5 ){
            return strrev($char);
        }
        
        return $char;
    }, $result);
    
    return join(" ", $result);
}

var_dump(spinWords("Hey fellow warriors"));