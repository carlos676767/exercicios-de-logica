<?php


final class Alphabet_position
{
    static public  function alphabetposition(string $s){
        $clean_string = preg_replace("/[^a-zA-Z0-9\s]/",  "", $s);
        $stringInLower = strtolower($clean_string);
        
       
        $splitString = str_split( $stringInLower);

        $filterSpaces = array_filter($splitString, function($chars) { return $chars != " "; });

         $alfabeto = range('a', 'z');
        
        $valuesInPosAlafebts =  array_map(function($chars) use ($alfabeto) {
           return array_search($chars , $alfabeto) + 1;
        }, $filterSpaces );
        
        return implode(" ", $valuesInPosAlafebts);
    }
}

print_r(Alphabet_position::alphabetposition( "The sunset sets at twelve o' clock."));