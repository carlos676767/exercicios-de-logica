<?php
final class HasUniqueChars
{
    private $string;

    public function __construct($string)
    {
        $this->string = $string;
    }


    public  function hasUniqueChars(){
        $strInLOwer = strtolower( $this->string);
        $strSplit = str_split($strInLOwer);
        
        $uniqueList = array_unique($strSplit);
        return count($uniqueList) === strlen($strInLOwer);
    }
}

$hasUniqueCharss = new HasUniqueChars("Hello World");
echo($hasUniqueCharss->hasUniqueChars());