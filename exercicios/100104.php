<?php

final class RetorneAlbeth
{
    static public function albeth(int $n)
    {
        $albeth = range('a', 'z');

        return array_slice($albeth, 0, $n);
    }
}

$albeth = RetorneAlbeth::albeth(10);
print_r($albeth);