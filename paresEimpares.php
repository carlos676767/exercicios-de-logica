<?php



function arrayResults(array $list): mixed
{
    $ass = [];
    for ($i = 0; $i < count($list); $i++) {
        if ($list[$i] % 2 === 0) {
            $ass["pares"][] = $list[$i];
        } else {
            $ass["impares"][] = $list[$i];
        }
    }
    return [
        "maior" => max($list),
        "min" => min($list),
        "media" => floor(array_sum($list) / count($list)),
        "paresEimpares" => $ass
    ];
}
