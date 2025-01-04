
<?php

use BcMath\Number;

final class Positivesum
{
    static public function positive_sum($arr)
    {
        $filterFilter =  array_filter($arr, function ($char) {
            return $char > 0;
        });
        
        return array_reduce($filterFilter, function($a, $b){
            return $a + $b;
        }, 0);
    }
}

echo Positivesum::positive_sum([1, -4, 7, 12]);
