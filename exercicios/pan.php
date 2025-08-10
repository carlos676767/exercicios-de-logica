<?php

function detect_pangram($string) {
    $min = [];
    $valueEnd = "";
    $especiais = [
        '!', '@', '#', '$', '%', '¨', '&', '*', '(', ')',
        '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
        ',', '.', '<', '>', '/', '?', '|', '\\', '"', '\'',
        ' ',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    for ($i = 0; $i < strlen($string); $i++) {
        $char = $string[$i];
        if ($char >= 'A' && $char <= 'Z') {
            $value = ord($char) + 32;
            $min[] = chr($value);
        } else if (!in_array($char, $especiais) && $char >= 'a' && $char <= 'z') {
            $min[] = $char;
        }
    }

    for ($i = 0; $i < count($min); $i++) {
        for ($j = 0; $j < count($min); $j++) {
            if ($min[$i] < $min[$j]) {
                $temp = $min[$i];
                $min[$i] = $min[$j];
                $min[$j] = $temp;
            }
        }
    }

    for ($i = 0; $i < count($min); $i++) {
        if (!isset($min[$i + 1]) || $min[$i] != $min[$i + 1]) {
            $valueEnd .= $min[$i];
        }
    }
    
    return strlen($valueEnd) === 26;
}

