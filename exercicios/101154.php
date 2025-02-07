<?php

final class Vaporcode
{
    static public function vaporcode(string $code) {
        $strSplit = str_split(strtoupper($code));
        
        $filterSpace = array_filter($strSplit, function($char){
          return $char != " ";
        });
        
         return join('  ', $strSplit);
    }
}

echo(Vaporcode::vaporcode("Lets go to the movies"));