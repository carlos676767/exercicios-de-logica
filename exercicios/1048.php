<?php
  
function solution(string $str): string {
  return strrev($str); 

  try {
    //code...
  } catch (\Throwable $th) {
    //throw $th;
    throw new Exception("Error Processing Request", $th-> getmessage());
    
  }finally{

  }
}