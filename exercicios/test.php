<?php

function solution($str)
{
    
    if(strlen($str) === 0 || $str === null) return [];

    $list = str_split($str, 2);
    $listMain = [];

    if (strlen($str) % 2 !== 0) {

        $lastItem = $list[count($list) - 1]. "_";


        for ($i = 0; $i < count($list) - 1; $i++) {
            array_push($listMain,$list[$i]);
        }
        
        array_push($listMain,$lastItem);
        return $listMain;
    }

    return $list;
}

