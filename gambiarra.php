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



function bumpCounter(string $ants) {
    
    $count = "";

    for ($i=0; $i < strlen($ants); $i++) { 
       if ($ants[$i] == "R" || $ants[$i] == "L") {
        $count .= "0";
       }

       if ($ants[$i] != $ants[$i+ 1]) {
        $count .= "1";
       }
    }
    
    return   $count;

}


var_dump(bumpCounter("RRL"));