<?php


final class Between
{
    public static function between(int $a, int $b): array
    {
        $list = [];

        for ($i = $a; $i <= $b; $i++) {
            array_push($list, $i);
        }

        return $list;
    }
}


print_r(Between::between(1, 10));
