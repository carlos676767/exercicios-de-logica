<?php

function abbrevName(string $name) {
    $strSplit = explode(" ",$name); 
    $str = $strSplit[0][0]. ".". $strSplit[1][0];
    return strtoupper($str);
  }
  
  
  var_dump(abbrevName("Sam Harris")); //S.H

  