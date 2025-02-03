<?php
  
function maps(array $arr): array {
    return array_map(function($char) {
        return $char * 2;
    }, $arr); 
}