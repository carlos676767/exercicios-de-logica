<?php


function detect_pangram($string) { 
      $str =  preg_replace('/[^a-z]/', '', strtolower($string));
    
    $arr = str_split($str);
    $unique = array_unique($arr);
    
    return count($unique) == 26;
}
  