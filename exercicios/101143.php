<?php


final class SumTwoSmallestNumbers
{
    public static function sum(array $numbers)
    {
        sort($numbers);
        return $numbers[0] + $numbers[1];
    }
};
