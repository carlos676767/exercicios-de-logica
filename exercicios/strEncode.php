<?php

// Exercício: Codificação de parênteses baseado em repetição de caracteres
// Enunciado:
// Dada uma string, crie uma função que transforme cada caractere da string em:

// "(" se o caractere aparece apenas uma vez na string

// ")" se o caractere aparece mais de uma vez na string

// Exemplo:
// Input: "carro"
// Output: "(()))"

final class strEncode
{
    static public function encodeString( string $str){
        $lower = strtolower($str) ;

        $splitStr = str_split($lower);

        $listValues = array_reduce($splitStr,function($a, $b){
            $a[$b] = isset($a[$b]) ? $a[$b] + 1 : 1;
            return $a;  
        }, []);


        $newStr = array_map(function($char) use($listValues) {
            return $listValues[$char] == 1 ? "(" : ")";
        }, $splitStr);

        return implode("", $newStr);
     
    }
}

var_dump(strEncode::encodeString("carro"));



