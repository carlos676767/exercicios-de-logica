<?php


final class getCount
{
    private $list;

    private function __construct($list)
    {
        $this->$list = $list;
    }

    public function count(): int
    {
        $listUser = $this->list;
        $listUser = strtolower($listUser);
        $listUser = str_split($listUser);

        $vogais = ['a', 'e', 'i', 'o', 'u'];

        $myList = array_filter($listUser, function ($char) use ($vogais) {
            return in_array($char, $vogais);
        });

        return count($myList);
    }
}


$list = new getCount("abracadabra");

var_dump($list->count());
