<?php


final class ToWeirdCase
{
  static public function toWeirdCase(string $str){
    $strInString = str_split($str);

   $newSrr = array_map(function($chars, $indice){
            return $indice %2 === 0 ? strtoupper($chars): strtolower($chars);
    }, $strInString, array_keys($strInString)); 
    
    
    return join("", $newSrr);
  }
}

print_r(ToWeirdCase::toWeirdCase("Weird string case"));