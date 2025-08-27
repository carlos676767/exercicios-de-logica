<?php

function solution(int $number) {
  
    
  return $number < 0 ? 0: array_reduce(
       array_filter(
           range(0, $number - 1),
           function($char) {
               return $char % 5 == 0 || $char % 3 == 0;
           }
       ),
       
       
       function($a, $b) {
           return $a + $b;
       }
   ,0);
}
