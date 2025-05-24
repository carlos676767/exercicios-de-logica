<?php

final class Anagrama 
{
   static public function angram($str1, $str2){

    if (strlen($str1) != strlen($str2)) {
        return "no es un anagrama";
    }

    $str1 = str_split($str1);
    $str2 = str_split($str2);

    sort($str1);
    sort($str2);
    
    return $str2 === $str1;
   } 
}

var_dump(Anagrama::angram("roma" ,"amor"));
