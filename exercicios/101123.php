<?php




final class HighAndLow
{
    static public function highAndLow(string $value)
    {
        $VectorNumbers = [];
        for ($i = 0; $i < strlen($value); $i++) {
            if ($value[$i] !== ' ') {
                array_push($VectorNumbers, (int)$value[$i]);
            }
        }


        for ($i = 0; $i < count($VectorNumbers); $i++) {
            for ($j = 0; $j < count($VectorNumbers); $j++) {
                if ($VectorNumbers[$i] > $VectorNumbers[$j]) {
                    $temp = $VectorNumbers[$i];
                    $VectorNumbers[$i] = $VectorNumbers[$j];
                    $VectorNumbers[$j] = $temp;
                }
            }

            return (string) ($VectorNumbers[0]) . " ". (string) ($VectorNumbers[count($VectorNumbers) - 1]);
        }
    }
}


echo(HighAndLow::highAndLow("1 2 3 4 5"));
