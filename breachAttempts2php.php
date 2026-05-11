<?php



function breachAttempts(array $hackers, int $securityLevel, int $increase)
{
    $attac = 0;

    $defaultNumber = 0;

    count($hackers) == $defaultNumber
        ? $defaultNumber
        : array_reduce(
            $hackers,
            function($carry, $cc) use ($securityLevel, $increase, $attac){

                if ($cc > $securityLevel) {
                    ++$attac;
                } else {
                    $securityLevel += $increase;
                }

                return $carry;
            },
            $defaultNumber
        );

    return $attac;
}

var_dump(breachAttempts([7, 6, 8, 9], 6, 2));


