<?php





final class Maps
{


    static public function maps(array $arr): array
    {
        return array_map(function($elemnts){
            return $elemnts * 2;
        }, $arr);
    }
}

print_r(Maps::maps([1, 2, 3]));
