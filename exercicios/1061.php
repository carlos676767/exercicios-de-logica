<?php

function dont_give_me_five(int $start, int $end): int
{
    $countValues = 0;

    for ($i = $start; $i <= $end; $i++) {
        if (strpos((string)$i, '5') === false) {
            ++$countValues; 
        }
      
    }

    return $countValues ;
}