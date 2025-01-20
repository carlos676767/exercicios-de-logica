<?php

class fakeBin
{
    static public function fakeBin(string $input)
    {
        $strSepare = str_split($input);

        $strFakeBinConversion =  $strSepare = array_map(function ($char) {
            return $char < "5" ? "0" : "1";
        }, $strSepare);
        
        return implode("", $strFakeBinConversion);
    }
}

print_r(fakeBin::fakeBin("45385593107843568"));