<?php

final class Camel_case
{
    static public function camel_case(string $str): string
    {
        return ucwords($str);
    }
}

print_r(Camel_case::camel_case("ana"));
