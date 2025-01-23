<?php

function no_space(string $s): string {
    $concat = '';

    for ($i=0; $i <strlen($s) ; $i++) { 
        if( $s[$i] != ' '){
             $concat .= $s[$i];
        }
    }

    return $concat;
}

echo(no_space("8 j 8   mBliB8g  imjB8B8  jl  B"));