<?php

function encrypt(string $text, int $n): string
{
    $par = "";
    $impar = "";
    for ($k = 0; $k < $n; $k++) {
        for ($k = 0; $k < strlen($text); $k++) {
            if ($k % 2 === 0) {
                $par .= $text[$k];
            } else {
                $impar .= $text[$k];
            }
        }


        $text = $impar . $par;
    }


    return $text;
}



var_dump(encrypt("012345", 1));