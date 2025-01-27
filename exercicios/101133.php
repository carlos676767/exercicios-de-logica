<?php



final class High{
    public static function high($x)
    {
        $alfabeth = range("a", "z");
        
        $strImplode = explode(" ", $x);
        
          $sumStringValues =  array_map(function($chars) use ($alfabeth) {
            $strSplit = str_split($chars); 
           
            $arrayInNuns = array_map(function($char) use ($alfabeth) {
                $index = array_search($char, $alfabeth); 
                return $index + 1;
            }, $strSplit);
            
            return array_sum($arrayInNuns);
        }, $strImplode);
        
        $maxValueStr = max($sumStringValues);
        
        $strPosition = array_search($maxValueStr, $sumStringValues);
        
        return $strImplode[$strPosition];
    }
} 

 

echo(High::high("man i need a taxi up to ubud"));