<?php


final class Digitize
{
    static public function digitize(int $n): array
    {
        $conveterInSting = (string) ($n);
        $converterInString = strrev ($conveterInSting); 
        $inArray = str_split($converterInString); 
        
       return array_map(function($ins){
            return  (int) $ins;
        }, $inArray);
        
    }

}


print_r(Digitize::digitize(35231));
