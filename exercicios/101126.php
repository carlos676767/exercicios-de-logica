<?php
final class Friends
{
    static public function friend(array $str)
    {
        $list = [];

        for ($i = 0; $i < count($str); $i++) {
            if (count($str[$i]) === 4) {
                array_push($list, $str[$i]);
            }
        }

        return $list;
    }
}
