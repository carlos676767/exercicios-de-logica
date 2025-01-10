<?php

final class GetMiddle
{
    static public function getMiddle($text)
    {
        $getLengthStr = strlen($text);
        $strInArr = str_split($text);
        $getMiddlje = floor($getLengthStr / 2);
        if (count($strInArr) % 2 !== 0) {
            return $strInArr[$getMiddlje];
        }
        
        return $strInArr[$getMiddlje - 1] . $strInArr[$getMiddlje];
    }
}


var_dump(GetMiddle::getMiddle('testing'));
var_dump(GetMiddle::getMiddle('middle'));
