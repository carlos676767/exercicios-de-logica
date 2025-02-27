<?php

final class StrThoUpper
{
    static public function strCase(string $str) {
        $strSsplit = explode(' ', $str);
        
        $strCase = array_map(function($str){
            return strtoupper($str[0]) . substr($str, 1);
        }, $strSsplit);
        
        
        return implode(' ', $strCase);
    }
}


var_dump(StrThoUpper::strCase("jest sou silva"));