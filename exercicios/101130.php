<?php


final  class Classhigh
{
    static public function high(string $str){
        $alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'
        ];
        
        $strInArr = self:: strInArray($str);
        $strStrings = self:: valuesString($str);
        return $strInArr;
    }
    
    private static function strInArray(string $str){
      $strInArray = [];
      $currentWord = '';

        for ($i = 0; $i < strlen($str); $i++) {
            if ($str[$i] !== ' ') {
                $currentWord .= strtolower($str[$i]);
            } else {
                $strInArray[] = $currentWord;
                $currentWord = '';
            }
        }
        
        if ($currentWord !== '') {
            $strInArray[] = $currentWord;
        }

        return $strInArray;

    }
    
    
    private static  function valuesString(array $list){
      $arrayValues = [];
      
        for ($i = 0; $i < count($list); $i++) {
         
        for ($j = 0; $j < count($list); $j++) {
         
        }
        }
        
        return $arrayValues;
    }
}

print_r(Classhigh::high('man i need a taxi up to ubud'));