<?php

final class sortArray
{
    static public function sortArray(array $vector)
    {
        for ($h = 0; $h < count($vector); $h++) {
            if ($vector[$h] % 2 !== 0) {
                for ($i = 0; $i < count($vector); $i++) {
                    for ($j = 0; $j < count($vector); $j++) {
                        if ($vector[$i ] < $vector[$j]) {
                          $temp = $vector[$i];
                          $vector[$i] = $vector[$j];
                          $vector[$j] = $temp;
                        }
                    }
                }
            }
        }
    }
}

$arr = [5, 8, 6, 3, 4];

var_dump(sortArray::sortArray($arr));
