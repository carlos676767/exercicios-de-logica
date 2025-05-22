<?php
  
function move(int $pos, int $roll): int {
  return  $pos + 2 *$roll;
}

echo move(3, 6);