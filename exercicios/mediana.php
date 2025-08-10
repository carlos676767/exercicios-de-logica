<?php

function mediana(array $list)  {
    
    if(count($list) === 0){
        return -1;
    }
     sort($list);
    
     if(count($list) %2 !== 0){
         $index = floor(count($list) /2);
         
         return $list[$index];
     };
     
     $divide =  floor(count($list) /2);
     
     return ($list[$divide] + $list[$divide - 1]) / 2;;
    
}

var_dump(mediana([4,8,6,2,25, 34]));