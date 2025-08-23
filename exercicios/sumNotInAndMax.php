function sumArray($array) {
     sort($array);
     
     $list = array_sum($array);
     
     
     $min = $array[0];
     $max = $array[count($array) - 1];
     
     return $list - $max - $min;
}