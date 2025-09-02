<?php
function comp($a1, $a2):  bool
{

    if ($a1 === null || $a2 === null) return false;

    if (count($a1) != count($a2)) {
        return false;
    }


    $list1 = array_map(function ($char) {
        return $char * $char;
    }, $a1);

    sort($list1);
    sort($a2);

    for ($i = 0; $i < count($list1); $i++) {
        if ($list1[$i] != $a2[$i]) {
            return false;
        }
    }

    return true;
}

var_dump(comp([121, 144, 19, 161, 19, 144, 19, 11], [14641, 20736, 361, 25921, 361, 20736, 361, 121]));
