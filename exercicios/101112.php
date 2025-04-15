<?php
  
function getCount(string $str) {
  $strSplit = str_split($str);
  $vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  $list = array_filter($strSplit,function($char)use($vogais){
      return in_array($char, $vogais);
  });
  
  return count($list);
}

