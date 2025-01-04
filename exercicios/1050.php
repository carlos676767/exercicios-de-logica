<?php

final class CountPositivesSumNegatives
{
    static public function countPositivesSumNegatives($input): array
    {


        if (empty($input)) {
            return [];
        }

        $filterPositiveNumbers = array_filter($input, function ($positiveNumbers) {
            return $positiveNumbers > 0;
        });

        $countPositiveNumbers = count($filterPositiveNumbers);


        $sumNegativeNumbers = array_sum(array_filter($input, function ($number) {
            return $number < 0;
        }));


        return [
            $countPositiveNumbers,
            $sumNegativeNumbers
        ];
    }
}


print_r(CountPositivesSumNegatives::countPositivesSumNegatives(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
));
