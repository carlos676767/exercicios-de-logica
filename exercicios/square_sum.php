<?php
  
function square_sum(array $numbers) {
  $poeww = array_map(fn($char) => pow($char, 2),  $numbers); 
  return array_sum($poeww);
}


var_dump(square_sum([1, 2, 2]));