<?php

function duplicateCount(string $str)
{
    $strLowerCase = str_split(strtolower($str));

    $countList = [];

    foreach ($strLowerCase as $item) {
        if (!isset($countList[$item])) {
            $countList[$item] = 1;
        } else {
            ++$countList[$item];
        }
    }

    $keyList = array_keys($countList);

    return count(array_filter($keyList, fn($char) => $countList[$char] > 1 ));
}

var_dump(duplicateCount("aabcaaddddddeA"));
