<?php

function countSheep($arr) {
  $list = array_filter($arr, function($char){
      return $char == true;
  });
  
  
  return count($list);
}

var_dump(countSheep([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));