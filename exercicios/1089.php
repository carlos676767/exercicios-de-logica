<?php

final class HighAndLow
{
 static public function highAndLow(array $numbers): string{
    $inStr = max($numbers) . " " . min($numbers);
    return (string) $inStr;
 }
}

print_r(HighAndLow::highAndLow([1, 2, 3, 4, 5]));