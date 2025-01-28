<?php

final class ArrayDiff
{
    static public function arrayDiff(array $a, array $b)
    {
        return array_filter($a, function ($value) use ($b) {
            return !in_array($value, $b);
        });
    }
};