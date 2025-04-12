<?php
  
function abbrevName(string $name) {
  $strSplit = explode(" ",$name); 
  $strUpper = array_map(fn($char) => strtoupper($char[0]), $strSplit); 
  
  
  return implode(".", $strUpper);
}


var_dump(abbrevName("Sam Harris")); //S.H