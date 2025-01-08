<?php



final class BinToDec
{
    public static function binToDec(string $bin): int
    {
        return intval($bin, 2);
    }
}

print_r(BinToDec::binToDec("1001001"));
