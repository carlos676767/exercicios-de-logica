<?php
  
function digitize(int $n){
  $str = str_split( (string) $n );
  $converterNumber = array_map(function($str){
      return (int) $str;
  }, $str);
  

  array_reverse($converterNumber);
  
  return $converterNumber;
}

print_r(digitize(35231));

