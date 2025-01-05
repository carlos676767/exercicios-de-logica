
<?php



function twoOldestAges(array $ages): array
{
    rsort($ages);
    $getElements = array_slice($ages, 0, 2);
    sort($getElements);
    return $getElements;    
}

print_r(twoOldestAges([1, 2, 10, 8]));
