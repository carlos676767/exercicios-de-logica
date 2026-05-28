<?php

function race(int $v1, int $v2, int $g): array | null
{
    $minutesPerHour = 60;
    $secondsPerHour = 3600;

    if ($v1 >= $v2) {
        return null;
    }

    $time = $g / ($v2 - $v1);
    $hours = (int) floor($time);
    $minutes = floor($time * $minutesPerHour) % $minutesPerHour;
    $seconds = floor($time * $secondsPerHour) % $minutesPerHour;

    return [
        $hours,
        $minutes,
        $seconds
    ];
}

var_dump(race(720, 850, 70));
