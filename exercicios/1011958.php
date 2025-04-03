<?php 

function encodeEmail( string $str){
   $strSplit = explode('@', $str);
   $strArroba = '@' . $strSplit[1];
   $strLenName =  strlen($strSplit[0]);

   $test = str_repeat('*', $strLenName);
   return $test .  $strArroba ;
}

var_dump(encodeEmail('wevifoc604@provko.com'));
var_dump(encodeEmail('berenal570@provko.com'));
var_dump(encodeEmail('lixaley49ee4@noroasis.com'));

