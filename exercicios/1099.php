<?php



function uniqueInOrder($iterable){
    $list = [];

    for ($i=0; $i < strlen($iterable); $i++) { 
      if ($i === strlen($iterable) - 1 || $iterable[$i] !== $iterable[$i + 1]) {
          array_push($list, $iterable[$i]);
      }
    }
    return join(``, $list);
 }
 echo(uniqueInOrder('AAAABBBCCDAABBB'));