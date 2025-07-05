<?php



// Exercício 2 — Soma de pares com alvo (Two Sum)
// Descrição:
// Dado um array de inteiros nums 
// e um inteiro alvo target, retorne os 
// índices dos dois números que somam target.
function TwoSum(array $list, int $value)
{

    for ($i = 0; $i < count($list); $i++) {
        if ($list[$i] + $list[$i + 1] === $value) {
            return [$i, $i + 1];
        }
    }

    return null;
}


var_dump(TwoSum([2, 7, 11, 15, 44, 865, 10, 5], 15));
