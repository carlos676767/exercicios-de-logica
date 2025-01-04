<?php


final class SetInterval
{
    public static function setInterval(int $time, int $end)
    {
        $valueBreak = $end + 1;
        while (true) {
            --$valueBreak;
            echo "{$valueBreak} seconds left...\n";
            sleep($time);
            if ($valueBreak === 0) {
                echo 'Time is up!';
                break;
            }
        }
    }
}

SetInterval::setInterval(2, 10);
