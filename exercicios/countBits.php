<?php

function countBits($n) 
{
  return strlen(str_replace("0", "", decbin($n)));
}

var_dump(countBits(1234));

function nArmstrong($n){
    
}
?>