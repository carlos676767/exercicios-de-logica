<?php

final class Camel_case
{
    static public function camel_case(string $str)
    {
        $strInMap = explode(" ",$str);

        $myStr = array_map(function($char){
            return strtoupper($char[0]) . substr($char, 1);
        }, $strInMap);
        
        return implode("", $myStr);
    }
}

print_r(Camel_case::camel_case("camel case word"));
