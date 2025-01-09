<?php


function divisibleBy($numbers, $divisor) :  array{
    return array_filter($numbers, function($num) use($divisor) {
        return $num % $divisor === 0;
    });
}

print_r(divisibleBy([1, 2, 3, 4, 5], 2));
