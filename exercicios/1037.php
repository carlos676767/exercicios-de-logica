<?php

final class SpinWords
{
   static public function spinWords(string $str): string
    {
        $splitString = explode(" ", $str);

       $inverterStr = array_map(function($char){
        if (strlen($char) >= 5) {
            return  strrev($char);
        }
        return $char;    
       }, $splitString);

       return implode(" ", $inverterStr);
    }
}


// array_filter($splitString, function ($char) {
//     return strlen($char) >= 5;
// });
echo SpinWords::spinWords("Hey fellow warriors");
