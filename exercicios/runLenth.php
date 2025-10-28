<?php


function runLenth( string $str){
    
    $objectCount = [];

    $strLowerCase = strtolower($str);
    
    for ($i=0; $i < strlen($strLowerCase); $i++) { 
      if (!isset($objectCount[$strLowerCase[$i]])) {
        $objectCount[$strLowerCase[$i]] = 1;
      }else{
        ++$objectCount[$strLowerCase[$i]];
      }
    }

    ksort($objectCount);

    $uniqueVector = array_unique(str_split($strLowerCase));
    $values = array_values($objectCount);


    return join("",array_map(function ($char, $count) {
        return $char . $count;
    }, $uniqueVector, $values));
}

//Entrada:  "aaabbccccd"
// Saída:    "a3b2c4d1"
var_dump(runLenth("aaabbccccd"));