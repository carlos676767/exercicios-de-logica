<?php

function sqInRect(int $lng, int $wdth)
{

    if ($lng == $wdth) {
       return null;
    }

    $result = [];

    while ($lng !== 0 && $wdth !== 0) {
        $min = min($lng, $wdth);
        array_push($result, $min);
        if ($wdth > $lng) {
            $wdth -= $min;
        } else {
            $lng -= $min;
        }
    }

    return $result;
}
var_dump(sqInRect(5, 3));
