<?php


final class Alphabet_position
{
    static public  function alphabetposition(string $s){
        $clean_string = preg_replace("/[^a-zA-Z0-9\s]/",  "", $s);
        $stringInLower = strtolower($clean_string);
        
        $alfabeto = range('a', 'z');
        $splitString = str_split( $stringInLower);

        $filterSpaces = array_filter($splitString, function($chars) { return $chars != ""; });

        
        
        return array_map(function($chars){
            return $chars;
        }, $filterSpaces );
        
        
    }
}

print_r(Alphabet_position::alphabetposition( "The sunset sets at twelve o' clock."));