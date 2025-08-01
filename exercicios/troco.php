<?php


function sum(int $n)
{
    $count = [];
    $list = [25, 10, 5, 1];

    for ($i = 0; $i < count($list); $i++) {
        for ($j = 0; $j < count($list); $j++) {
            if ($list[$j] + $list[$i] === $n) {
                array_push($count,$list[$i], $list[$j]);

                return $count;
            }
        }
    }

    return -1;
}

var_dump(sum(30));
