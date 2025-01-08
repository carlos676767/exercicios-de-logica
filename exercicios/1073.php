<?php



final class RemoveUrlAnchor
{
    public static function main($url)
    {
        return explode("#", $url)[0];
    }
}

print_r(RemoveUrlAnchor::main("www.codewars.com#about"));
