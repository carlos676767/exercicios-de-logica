<?php

 final class InverterString
 {
    static public function inverterStr(string $str){
        $strReversed = strrev($str);
        return $strReversed;
    }
 }
 

 echo InverterString::inverterStr('Hello World!'); 
?>