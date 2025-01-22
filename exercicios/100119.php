<?php

final class AbbrevName
{
    public static function abbredName(string $NameUser): string
    {
        $listUser = [];
        
        for ($i = 0; $i < strlen($NameUser); $i++) {
            if ($NameUser[$i] == ' ') {
                $listUser[] = $NameUser[$i - 1]; 
                $listUser[] = $NameUser[$i + 1];
            }
        }

        
        $alphabetObject = [
            'a' => 'A', 'b' => 'B', 'c' => 'C', 'd' => 'D', 'e' => 'E',
            'f' => 'F', 'g' => 'G', 'h' => 'H', 'i' => 'I', 'j' => 'J',
            'k' => 'K', 'l' => 'L', 'm' => 'M', 'n' => 'N', 'o' => 'O',
            'p' => 'P', 'q' => 'Q', 'r' => 'R', 's' => 'S', 't' => 'T',
            'u' => 'U', 'v' => 'V', 'w' => 'W', 'x' => 'X', 'y' => 'Y', 'z' => 'Z',
        ];
        
        $concatStr = $listUser[0] . '.' . $listUser[1];
        $strResultFinally = '';

        for ($i = 0; $i < strlen($concatStr); $i++) {
            $char = strtolower($concatStr[$i]);

            if (isset($alphabetObject[$char])) {
                $strResultFinally .= $alphabetObject[$char];
            } else {
                $strResultFinally .= $concatStr[$i];
            }
        }

        return $strResultFinally;
    }
}


echo AbbrevName::abbredName('patrick feeney');

  
