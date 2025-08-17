<?php
function findMissingLetter(array $array)
{
    $rangerUpper = null;
    if (ctype_upper($array[0])) {
        $rangerUpper = range('A', 'Z');
    }else{
         $rangerUpper = range('a', 'z');
    }
    
     $startIndex = array_search($array[0], $rangerUpper);
    for ($i = 0; $i < count($array); $i++) {
         if($array[$i] != $rangerUpper[$startIndex + $i]){
               return $rangerUpper[$startIndex + $i];
         }
    }
    
    

}

var_dump(findMissingLetter(['O','Q','R','S'] ));
?>