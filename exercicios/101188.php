<?php


final class Palindromo
{
    private string $str;

    public function __construct(string $str)
    {
        $this->str = $str;
    }

    public function isPalindromo() : string{
     $string = strrev($this -> str);
     return $string === $this -> str ? "É um palíndromo" :"Não é um palíndromo";
    }
}


$palindromo = new Palindromo("ovo");
echo($palindromo -> isPalindromo());