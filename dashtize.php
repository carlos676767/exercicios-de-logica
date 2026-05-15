<?php

function dashtize(string $num) : string 
{

    $getNewNumberJoin = null;

    $defaultNumber0 = 0;
    $defaultNumber2 = 2;

    for ($i = $defaultNumber0; $i < strlen($num); $i++) {

        $converterStrInNumber = (int) $num[$i];

        if ($converterStrInNumber < $defaultNumber0) {
            $converterStrInNumber = $converterStrInNumber * -1;
        }

        if ($converterStrInNumber % $defaultNumber2 !== $defaultNumber0) {
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