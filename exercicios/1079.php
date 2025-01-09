<?php

final class Isvow
{
    
    static public function isVow(array $a): array
    {
        $vowels = ["a", "e", "i", "o", "u"];
        $vowelsInAsci = [97, 101, 105, 111, 117];
        $filterElements =  array_filter($a, function ($item) use ($vowels, $vowelsInAsci) {
            return in_array($item, $vowels) || in_array($item, $vowelsInAsci);
        });

        return  array_map(function ($item) {
            return ord($item);
        }, $filterElements);
    }
}

print_r(Isvow::isVow(["e", 121, "e"]));
