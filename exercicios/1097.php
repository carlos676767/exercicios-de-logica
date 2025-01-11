<?php


class SortArray{
    static public function sortArray(array $arr) : array {
        $filterPar = array_filter($arr, fn($num) => $num %2 !== 0);
        sort($filterPar);
        $count = 0;

        return array_map(function($num) use (&$count, $filterPar) {
            if ($num %2 !== 0) {
                return $filterPar[
                    $count++
                ];
            }

            return $num;
        }, $arr);
    }
}

print_r(SortArray::sortArray([5, 8, 6, 3, 4] ));
?>