<?php

function detect_pangram($string) {
    $string = strtolower($string);
    $string = preg_replace('/[^a-zA-Zá-úÁ-Úà-ùÀ-ÙãõÃÕêÊçÇ]/u','', $string );
    $string = str_split($string);

    return count(array_unique($string)) == 26;

}

var_dump(detect_pangram("The quick brown fox jumps over the lazy dog."));