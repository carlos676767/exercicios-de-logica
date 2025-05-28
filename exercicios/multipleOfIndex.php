<?php
function multipleOfIndex(array $arr) : array {
    
     return array_filter(
        $arr,
        fn($char, $i) => $i !== 0 &&  $char % $i === 0,
        ARRAY_FILTER_USE_BOTH
    );



}


print_r(multipleOfIndex([22, -6, 32, 82, 9, 25]));
?>