<?php

function array_diff($a, $b) {
   return array_filter(($a) fn($value)=> !in_array($value, $b))
}
  
  
?>