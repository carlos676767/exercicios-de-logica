<?php


final class Twice_as_old
{
    public static function twice_as_old($dad_years_old, $son_years_old)
    {
        $values = $dad_years_old - 2 * $son_years_old;
        return abs($values);
    }
}