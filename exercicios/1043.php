
<?php


final class AbbrevName
{
    static public function abbrevName(string $name): string
    {
        $splitString = explode(" ",  $name);

        $arrayOne = array_map(function ($char)   {
            return strtoupper($char[0]);
        }, $splitString);
        
        $abretedStr = join(".", $arrayOne);
        return $abretedStr;
    }
}

print_r(AbbrevName::abbrevName("Sam Harris"));
