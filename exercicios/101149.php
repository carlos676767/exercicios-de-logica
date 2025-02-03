<?php

final class FindShort
{
   static public function findShort($name) {
    $strSplit = explode(" ", $name);
       usort($strSplit, function ($a, $b) {
        return strlen($a) - strlen($b); 
    });
    
    return strlen($strSplit[0]); 
   }
}

var_dump(FindShort::findShort("bitcoin take over the world maybe who knows perhaps")); 
