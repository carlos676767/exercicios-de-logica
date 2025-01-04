<?php
  
function centuryFromYear(int $year): int{
  return  (int) ceil($year / 100);
}