<?php
  
function round_to_next_5(int $n){
  return ceil($n/5) * 5; 
}

var_dump(round_to_next_5(2));