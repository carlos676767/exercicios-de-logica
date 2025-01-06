<?php

final class IsIsogram
{
    static public function isIsogram($string) : bool 
    {
     
        if (!$string) {
            return true;
        }

       $string = strtolower($string);
       $strSplit = str_split($string);
      return count(array_unique($strSplit)) === strlen($string);
      
    }
}


print_r(IsIsogram::isIsogram("Dermatoglyphics"));