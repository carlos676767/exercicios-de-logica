<?php

function detect_pangram($string) {
    $string = strtolower($string);
    $string = preg_replace('/[^a-zA-Zá-úÁ-Úà-ùÀ-ÙãõÃÕêÊçÇ]/u','', $string );
    $string = str_split($string);

    return array_unique($string);

}

var_dump(detect_pangram("The quick brown fox jumps over the lazy dog."));