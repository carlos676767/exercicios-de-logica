<?php

function sumOfDifferences(array $arr): int
{
    for ($i = 0; $i < count($arr); $i++) {
        for ($j = 0; $j < count($arr); $j++) {
            if ($arr[$i] > $arr[$j]) {
                $temp = $arr[$i];
                $arr[$i] = $arr[$j];
                $arr[$j] = $temp;
            }
        }
    }

    $sum = 0;

    for ($i = 0; $i < count($arr) - 1; $i++) {
        $sum += $arr[$i] - $arr[$i + 1];
    }

    return $sum;
}