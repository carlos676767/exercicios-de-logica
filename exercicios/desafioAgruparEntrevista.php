<?php

// 🔴 Desafio: Agrupador Inteligente de Frases
// ✅ Enunciado:
// Você recebe um array de frases como este:

// php
// Copy
// Edit
// $frases = [
//     "gato dorme no sofá",
//     "cachorro late muito",
//     "gato pula alto",
//     "pássaro canta",
//     "cachorro dorme bastante",
//     "gato mia",
//     "pássaro voa"
// ];
// Crie uma função que agrupa as frases por palavra-chave principal. Para este desafio, considere como palavra-chave o primeiro
//  substantivo da frase (neste exemplo: gato, cachorro, pássaro).



function agrupar(array $list)
{
    $agrupador = [];

    for ($i = 0; $i < count($list); $i++) {
        $separeStr = str_split($list[$i]);
        sort($separeStr);
        $junteStr = implode('', $separeStr);

        $agrupador[$junteStr][] = $list[$i];
    }

    return $agrupador;
}


print_r(agrupar(["roma", "amor", "gato", "toga", "arco", "caro", "cora", "bola"]));
