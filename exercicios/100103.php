<?php

final class FindAEvenAndOdd
{
    static public  function find($integers): int {
        $even = array_filter($integers, function($value){
            return $value %2 == 0;
        });

        $odd = array_filter($integers, function($value){
            return $value %2 !== 0;
        });

        return count($even) === 1 ? reset($even) :  reset($odd);
    }
}

print_r(FindAEvenAndOdd::find([2, 4, 0, 100, 4, 11, 2602, 36]));