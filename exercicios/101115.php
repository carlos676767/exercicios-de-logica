<?php
  
function solution(string $str) {
  $sting = str_split( $str);
  
  $reverseString = array_reverse($sting);
  
  return join('', $reverseString);
}

var_dump(solution('world'));
