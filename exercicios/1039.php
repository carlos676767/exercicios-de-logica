
<?php




final class TwoOldestAges
{
    static   public  function twoOldestAges(array $ages)
    {
        rsort($ages);
        $test =  array_slice($ages, 0, 2);
        sort($test);
        return $test;
    }
}

print_r(TwoOldestAges::twoOldestAges([1, 2, 10, 8]));
