<!-- Contar Vogais em uma String -->
<?php

class CountVogais
{
    static  public  function countVogais(string $palavraIn): int
    {

        $palavraInArray = strtolower( $palavraIn);
        $vogais = ['a', 'e', 'i', 'o', 'u'];
        $countVogais = 0;
        for ($i = 0; $i < strlen($palavraInArray); $i++) {
            if (in_array($palavraInArray[$i], $vogais)) {
                ++$countVogais;
            }
        }


        return $countVogais;
    }
}


echo CountVogais::countVogais("carlos");
?>