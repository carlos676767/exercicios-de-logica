<?php

function find_uniq($a)
{
    $countCurrents  = [];

    for ($i = 0; $i < count($a); $i++) {
        if (!isset($countCurrents[$a[$i]])) {
            $countCurrents[$a[$i]] = 1;
        } else {
            $countCurrents[$a[$i]]++;
        }
    }


    $keys = array_keys($countCurrents);
    
    $values = array_values($countCurrents);

    sort($values);

    return $keys[$values[0]];

}


print_r(find_uniq([1, 1, 1, 2, 1, 1]));
