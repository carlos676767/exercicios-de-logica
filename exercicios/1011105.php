
<?php

function removeExclamationMarks( string $str) {
    $strSplit = str_split( $str);
    $filter = array_filter( $strSplit, fn($char)  => $char != "!");
    return implode("", $filter);
}

var_dump(removeExclamationMarks("Hello World!"));

?>