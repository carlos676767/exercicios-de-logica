<?php



final class ArrayDiff
{
    static public function arrayDif($array, $b){
        return array_filter($array,function($s) use ($b) {
            return $s!= $b;
        });
    }
}




var_dump(ArrayDiff::arrayDif([1, 2, 3, 4, 5], 1));