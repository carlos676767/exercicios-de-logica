<?php

final class HighAndLow
{
    static public function highAndLow(string $str)
    {
        $strSplit = explode(" ", $str);

        $strIntConverter = array_map(function ($char) {
            return   (int) $char;
        }, $strSplit);
        
        return join(" ",  [
            Max($strIntConverter),
            Min($strIntConverter)
        ]);
    }
}

print_r(HighAndLow::highAndLow("1 2 3 4 5"));