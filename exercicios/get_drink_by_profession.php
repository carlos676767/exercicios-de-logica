<?php

function get_drink_by_profession(string $s) {
    $drinkByProfession = [
    "Jabroni" => "Patron Tequila",
    "School Counselor" => "Anything with Alcohol",
    "Programmer" => "Hipster Craft Beer",
    "Bike Gang Member" => "Moonshine",
    "Politician" => "Your tax dollars",
    "Rapper" => "Cristal"
];

$s = ucwords(strtolower($s));
return $drinkByProfession[$s] ?? "Beer" ;
}

var_dump(get_drink_by_profession("o"));