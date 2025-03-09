<?php

final class UniqueInOrder
{
    static public function main(string $args){
        return UniqueInOrder::resultUniqueOrder($args);
    }
    
    static private function resultUniqueOrder(string $args){
        $strSplit = str_split($args);
      
        return array_filter($strSplit, function ($char, $i) use ($strSplit) {
           return $char !== $strSplit[$i - 1];
        }, ARRAY_FILTER_USE_BOTH);
    }
}

print_r(UniqueInOrder::main("AAAABBBCCDAABBB"));