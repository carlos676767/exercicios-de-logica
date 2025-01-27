<?php

final class Accum
{
    static public function accum($value)
    {
        $strLowerCase = strtolower($value);
        $strSplit =  str_split($strLowerCase);

        $strRepeat = array_map(function ($list, $i) {
          
            return strtoupper($list) . str_repeat($list, $i);
            
        }, $strSplit, array_keys($strSplit));

        return implode("-", $strRepeat);
    }
}

var_dump(Accum::accum("abcd"));