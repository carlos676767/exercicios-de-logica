
<?php
final class HighAndLow
{
    static public function highAndLow(string $value)
    {
        $vectorConverter = str_split($value);
        $trimSpace = array_filter($vectorConverter, function($chars){
            return $chars != ' ';
        });

        $arrayConverter = array_map( function($value){
            return (int ) $value;
        }, $trimSpace);
        
        sort($arrayConverter);
        return (string) $arrayConverter[0] . " ". (string) $arrayConverter[count($arrayConverter) - 1];
    }
}


print_r(HighAndLow::highAndLow("1 2 3 4 5"));
