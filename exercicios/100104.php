<?php


final class retorneAlbeth
{
    static public function albeth(int $n)
    {
        $albeth = range('a', 'z');

        return array_slice($albeth, 0, $n);
    }
}

$albeth = retorneAlbeth::albeth(10);
print_r($albeth);