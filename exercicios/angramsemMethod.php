

<?php

function angram(string $str1, string $str2)
{
    $list = [];
    $concact ="" ;
    for ($i = 0; $i < strlen($str1); $i++) {
        if ($str1[$i] >= "A" && $str1[$i] <= "Z") {
            $order = ord($str1[$i]);
            array_push($list, chr($order + 32));
        } else {
            array_push($list, $str1[$i]);
        }
    }


    for ($i=count($list) -1; $i >= 0; $i--) { 
       $concact .= $list[$i];
    }

    return $concact === $str2;
}
var_dump(angram("Roma", "amo"));
