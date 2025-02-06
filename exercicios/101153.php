<?php



final class MoveZeros
{
    static public function movezeros(array $vector){
        $filterVector = array_filter($vector, function($n) {
            return $n!== 0;
        });

        $zero = array_filter($vector, function($char){
            return $char === 0;
        });

        return array_merge($filterVector, $zero);
    }
}

var_dump(MoveZeros::movezeros([false,1,0,1,2,0,1,3,"a"]));