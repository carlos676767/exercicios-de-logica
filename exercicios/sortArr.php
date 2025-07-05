<?php

function sortArray(array $arr)
{
    for ($i = 0; $i < count($arr); $i++) {
        for ($j = 0; $j < count($arr); $j++) {
            if ($arr[$i] % 2 !== 0 && $arr[$j] % 2 !== 0) {
                if ($arr[$i] < $arr[$j]) {
                    $temp = $arr[$i];
                    $arr[$i] = $arr[$j];
                    $arr[$j] = $temp;
                }
            }
        }
    }

    return $arr;
}

var_dump(sortArray([5, 8, 6, 3, 4]));

