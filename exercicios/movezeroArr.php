<?php


function zeroMove(array  $arr)
{
  
  $j = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if($arr[$i] !== 0){
            $arr[$j] = $arr[$i];
            ++$j;
        }
    }
    

    while ($j < 0) {
      ++$j;
      $arr[] = 0;
    }
    return $arr;
}

var_dump(zeroMove([0, 1, 0, 3, 12]));