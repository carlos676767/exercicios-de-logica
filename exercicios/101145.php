<?php

final class XOO
{
    static public  function xoo($at)
    {
        strtolower($at);

        $countX = array_filter($at, function ($char) {
            return $char === 'x';
        });

        $countO = array_filter($at, function ($char) {
            return $char === 'o';
        });
        
        return count($countX) === count($countO);
    }
}