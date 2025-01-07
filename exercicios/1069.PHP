<?php

final class Stray
{
  static private function stray(array $arr) 
  {
    $count = [];

    for ($i = 0; $i < count($arr); $i++) {
      if (!isset($count[$arr[$i]])) {
        $count[$arr[$i]] = 1;
      } else {
        $count[$arr[$i]]++;
      }
    }
    
    $valuesElentsVector = array_keys($count);

    $findUniquue = array_filter($valuesElentsVector, function($values) use ($count) {
      return $count[$values] == 1;
    });
    
    return  count( $findUniquue) > 0 ? (int) $findUniquue[1] : null;
  }

  static public function main(array $values) : int {
    return self::stray($values);
  }

}
print_r(Stray::main([17, 17, 3, 17, 17, 17, 17]));
