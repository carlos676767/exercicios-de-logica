<?php

final class Longest
{
    static public function longest(string $a, string $b)
    {
        
        $newSetStr1= self::newSetAlgorith($a);
        $neSetStr2 = self::newSetAlgorith($b);
        
        $newValuesSet = [
          ...$neSetStr2,
         ...$newSetStr1
          ];
        
        
        $orderByCaractres = self::doubleSort($newValuesSet);
        $implode = self::implodeStr($orderByCaractres);
        return $implode;

        
    }

    static private function newSetAlgorith(string $str): array
    {
        $count = [];

        for ($i = 0; $i < strlen($str); $i++) {
            if (!isset($count[$str[$i]])) {
                $count[$str[$i]] = 1;
            } else {
                $count[$str[$i]]++;
            }
        }

        $keysWithOne = [];

        foreach ($count as $key => $value) {
            if ($value === 1) {
                $keysWithOne[] = $key;
            }
        }

        return $keysWithOne;
    }

    static private function doubleSort(array $list):  array
    {
        for ($i = 0; $i < count($list); $i++) {
            for ($j = 0; $j < count($list); $j++) {
                if ($list[$i] < $list[$j]) {
                    $temp = $list[$i];
                    $list[$i] = $list[$j];
                    $list[$j] = $temp;
                }
            }
        }

        return $list;
    }

    static private function implodeStr(array $list):  string{
        $concat = '';

        for ($i=0; $i < count($list); $i++) { 
            $concat .= $list[$i];
        }


        return $concat;
    }
}
$a = "xyaabbbccccdefww";
$b = "xxxxyyyyabklmopq";

$result = Longest::longest($a, $b);

print_r($result);
