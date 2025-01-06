<?php

function no_space(string $s): string
{
    $strSplit = explode(" ", $s);

    return  join("", $strSplit);
}
