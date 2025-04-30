<?php
function pigIt($str){
    $splitStr = explode(' ', $str);
    
    
    $list = array_map(function($char){
        return substr($char, 1) .  $char[0]. 'ay';
    },$splitStr);
    
    
    return join(' ', $list);
    
    
}

var_dump(pigIt('hello my name ins sisifo'));// igPay atinlay siay oolcay


?>