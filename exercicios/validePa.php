<?php

function validarPa( string $str){
    $list = [];

    for ($i=0; $i < strlen($str); $i++) { 
        if($str[$i] === "("){
            array_push($list, $str[$i]);
        }else if($str[$i] === ")"){
            if(!$list){
               return false;
            }
            array_pop($list);
        }
    }
    return count($list) === 0 ? true : false;
}

var_dump(validarPa(("(2+3)*(4-1)")));



?>