<?php
  
function maskify(string $cc): string {
    
    
  if(strlen($cc) <= 4){
      return $cc;
  }
  $value = substr($cc, strlen($cc) - 4); 
   $strs =  strlen(substr($cc, 4));
   return str_repeat( "#", $strs). $value;
}


var_dump(maskify("4556364607935616")); //"############5616"