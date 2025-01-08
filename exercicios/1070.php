<?php


final class SimpleMultiplication
{
  public static function main($number)
  {
    if ($number % 2 === 0) {
      return $number * 8;
    }
    return $number * 9;
  }
}

print_r(SimpleMultiplication::main(1));