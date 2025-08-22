<?php

function alphabetposition(string $s)
{

      $strNotEs = preg_replace('/[^\p{L}]/u', '', $s);

      $strSplit = str_split($strNotEs);


      $rangerAlbathMaiscule = range('A', 'Z');
      $rangerAlfarthMinuscule = range('a', 'z');


      $result =  array_map(function ($char) use ($rangerAlbathMaiscule, $rangerAlfarthMinuscule) {
            if (in_array($char, $rangerAlbathMaiscule)) {
                  return array_search($char, $rangerAlbathMaiscule) + 1;
            }

            return array_search($char, $rangerAlfarthMinuscule) + 1;
      },  $strSplit);


    
      return join(' ', $result);
};

var_dump(alphabetposition("The sunset sets at twelve o' clock."));




print_r(CountBitsStr::countBits("eu amo dinheiro"));
