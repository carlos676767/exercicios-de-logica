<?php




final class Root13
{
    public static  function solution(string $str): string
    {
        $alfabth = [...range('A', 'Z'), ...range('a', 'z')];

        $value = str_split($str);

        $newStr = array_map(function ($char) use ($alfabth) {

            $newPosiotion = array_search($char, $alfabth) + 13;
            return $alfabth[$newPosiotion % count($alfabth)];
        }, $value);


        return strtolower(implode('', ($newStr)));
    }
}


var_dump(Root13::solution("ola sou carlos"));
