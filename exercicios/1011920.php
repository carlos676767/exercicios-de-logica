<?php
  
function disemvowel(string $s)  {
  $vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
$list = str_split($s);


$list = array_filter($list, function($char) use($vogais) {
    return !in_array($char, $vogais);
}, );



return join("", $list);
}


var_dump(disemvowel("This website is for losers LOL!"));