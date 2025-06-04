<?php


final class desafioGoogle
{
  static public function findPivotIndex(array $arr) {
       $sumArr = array_sum($arr);
       $index = 0;
        for ($i=0; $i < count($arr); $i++) { 
          $sum = $sumArr - $index - $arr[$i];
          
          if($sum == $index){
              return $i;
          }
          
          $index += $arr[$i];
    }
    
    return -1;
}

}



var_dump(desafioGoogle::findPivotIndex([1, 7, 3, 6, 5, 6])); // Saída: int(3)
var_dump(desafioGoogle::findPivotIndex([1, 2, 3]));          // Saída: int(-1)
var_dump(desafioGoogle::findPivotIndex([2, 1, -1]));         // Saída: int(0)
var_dump(desafioGoogle::findPivotIndex([0, 0, 0, 0]));       // Saída: int(0)
var_dump(desafioGoogle::findPivotIndex([5]));   