<?php
function toCamelCase( string $str){
     $result = str_replace(['-', '_'], ' ', $str);
     $result = explode(' ', $result);
     
     $myNewResult = array_map(function($char){
         return strtoupper($char[0]). substr($char, 1);
     }, $result);
     
     $myNewResult[0] = $result[0];
     
     return join( '', $myNewResult);
}

var_dump(toCamelCase('the-stealth-warrior'));
?>