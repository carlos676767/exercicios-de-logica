<?php

final class Order {
    static public function order($order){
     $strSplit = explode(" ", $order);
     
      usort($strSplit, function  ($a, $b){
        preg_match('/\d+/', $a, $aNum);
        preg_match('/\d+/', $b, $bNum);
        
        return $aNum[0] - $bNum[0];
     });
     
     return implode(" ", $strSplit);
    }
}

echo(Order::order("is2 Thi1s T4est 3a"));