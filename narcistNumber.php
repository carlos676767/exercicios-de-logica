<?php

function narcissistic(int $value)
{
    $list = (string) $value;
    $list = str_split($list);
    return array_sum(array_map(fn($n) => pow($n, count($list)), $list)) === $value;
}
