<?php

final class countPositivesSumNegatives
{
    static public function countPositivesSumNegatives($input)
    {
        if(empty($input) || !is_array($input)){
            return [];
        }

        $countPositive = array_filter($input, function ($n) {
            return $n > 0;
        });

        $sumNegative = array_filter($input, function ($n) {
            return $n < 0;
        });


        return [
            count($countPositive),
            array_sum($sumNegative)
        ];
    }
}
