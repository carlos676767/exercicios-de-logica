<?php
final class MoveZeros
{
    public static function moveZeros(array $arr) {
        $arrayNotZero = array_filter($arr, function($n){
            return $n != 0;
        });

        $filterZero = array_filter($arr, function($n){
            return $n == 0;
        });

        return [
            ...$arrayNotZero,
            ...$filterZero
        ];
    }
}
print_r(MoveZeros::moveZeros([false,1,0,1,2,0,1,3,"a"]));
