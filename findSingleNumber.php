<?php



function findSingleNumber ( array $arr) : mixed  {

    $unic = 0;

    for ($i=0; $i < count($arr); $i++) { 
        $unic = $unic ^ $arr[$i];
    }
    return $unic;
}


var_dump(findSingleNumber([1, 2, 3, 2, 1]));

