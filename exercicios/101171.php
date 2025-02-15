<?php
final class HasUniqueChars
{
    static public function hasUniqueChars(string $chars): bool
    {
        $getInArrayStr = str_split($chars);

        $filterSpace =  array_filter($getInArrayStr, function ($str) {
            return $str != " ";
        });

        $uniqueValue = array_unique($getInArrayStr);

        $filterSpaceUnique =  array_filter($uniqueValue, function ($str) {
            return $str != " ";
        });

        $joinStr = join("", $filterSpaceUnique);

        return strlen($joinStr) === strlen($chars);
    }
}


var_dump(HasUniqueChars::hasUniqueChars("  nAaa"));
