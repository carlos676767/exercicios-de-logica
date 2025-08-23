<?php

function sqInRect(int $lng, int $wdth) {
    if ($lng === $wdth) {
        return null;
    }

    $list = [];

    while ($lng !== $wdth) {
        if ($lng > $wdth) {
            $list[] = $wdth;  
            $lng -= $wdth;
        } else {
            $list[] = $lng;  
            $wdth -= $lng;
        }
    }


    $list[] = $lng;

    return $list;
}
