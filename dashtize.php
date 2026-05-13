<?php

function dashtize(string $num)
{

    $getNewNumberJoin = null;

    for ($i = 0; $i < strlen($num); $i++) {

        $converterStrInNumber = (int) $num[$i];

        if ($converterStrInNumber < 0) {
            $converterStrInNumber = $converterStrInNumber * -1;
        }

        if ($converterStrInNumber % 2 !== 0) {
            $getNewNumberJoin .= "-" . $converterStrInNumber . "-";
        } else {
            $getNewNumberJoin .= $converterStrInNumber;
        }
    }

    $getNewNumberJoin = preg_replace('/--+/', '-', $getNewNumberJoin);
    $getNewNumberJoin = preg_replace('/^-|-$/', '', $getNewNumberJoin);

    return $getNewNumberJoin;
}

var_dump(dashtize('274'));