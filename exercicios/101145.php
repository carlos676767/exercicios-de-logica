<?php

final class XOO
{
    static public  function xoo(string $at): bool
    {
        strtolower($at);

        $countX = array_filter($at, function ($char) {
            return $char === 'x';
        });

        $countO = array_filter($at, function ($char) {
            return $char === 'o';
        });

        $countValues = count($countX) === count($countO);

        if ($countValues) {
            return true;
        }
    }
}

XOO::xoo("abcd");