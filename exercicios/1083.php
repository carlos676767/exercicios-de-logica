
<?php

final class CreatePhoneNumber
{
    static public function createPhoneNumber(array $numbers) : string
    {
        $firstThreeDigits = array_slice($numbers, 0, 3);
        $middleThreeDigits = array_slice($numbers, 3, 3);
        $lastFourDigits = array_slice($numbers, 6);

        return "(" . implode("", $firstThreeDigits) . ") " . implode("", $middleThreeDigits) . "-" . implode("", $lastFourDigits);
    }
}

echo (CreatePhoneNumber::createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
