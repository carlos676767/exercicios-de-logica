<?php

final class UniqueInOrder
{
    static public function uniqueOrder($order)
    {
        $strSplit = str_split($order);
        
        $list = [];
        
        for ($i = 0; $i < count($strSplit); $i++) {
            if ($strSplit[$i] !== $strSplit[$i + 1] ) {
                $list[] = $strSplit[$i];
            }
        }
        
        return implode("",$strSplit);
    }
}
