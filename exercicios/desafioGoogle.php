<?php

final class desafioGoogle
{
    static public function findPivotIndex(array $arr)
    {
        $mid = (int)(count($arr) / 2);
        $list1 = array_slice($arr, 0, $mid);
        $list0 = array_slice($arr, $mid + 1);

        $list1 = array_sum($list1);
        $list0 = array_sum($list0);

        if ($list0 === $list1) {
            $value  = array_slice($arr, $mid)[0];
            return array_search($value, $arr);
        }



        return -1;
    }
}

var_dump(desafioGoogle::findPivotIndex([1, 7, 3, 6, 5, 6])); // Saída: int(3)
var_dump(desafioGoogle::findPivotIndex([1, 2, 3]));          // Saída: int(-1)
var_dump(desafioGoogle::findPivotIndex([2, 1, -1]));         // Saída: int(0)
var_dump(desafioGoogle::findPivotIndex([0, 0, 0, 0]));       // Saída: int(0)
var_dump(desafioGoogle::findPivotIndex([5]));
