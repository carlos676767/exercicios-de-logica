<?php


function isPalindrome(string $str): bool {
    return $str === strrev($str);
  }

  echo isPalindrome("ana");