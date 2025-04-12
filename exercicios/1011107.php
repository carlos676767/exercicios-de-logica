<?php

// Create an algorithm that receives a 
// string containing a sentence in lowercase
//  letters (for example, "hello world") and 
//  returns that same sentence with all letters 
//  in uppercase, without using ready-made language methods such as strtoupper()
//  or similar. The conversion must be done manually, character by character.
final class UpperCase
{
    static public function upperCase(string $str)
    {
        $str = str_split($str);

        $str = array_map(function ($char) {
            $temp = ord($char);

            if ($temp >= 97 && $temp <= 122) {
                return chr($temp -32);
            }

            return $char;
        }, $str);

        return join("", $str);
    }
}


print_r((UpperCase::upperCase("Sam Harris")));
