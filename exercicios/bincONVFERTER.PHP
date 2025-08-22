<?php
class CountBitsStr
{
      static public function countBits($str)
      {
            $increment = 0;
            $getAscTable = [];

            $getBin = null;

            $sortBin = [];

            while ($increment < strlen($str)) {
                  array_push($getAscTable, ord($str[$increment]));
                  ++$increment;
            }

            for ($i = 0; $i < count($getAscTable); $i++) {
                  $numero = $getAscTable[$i];
                  $binario = '';

                  while ($numero > 0) {
                        $converter = $numero;
                        $resto = $converter % 2;
                        $binario = $resto . $binario;
                        $numero = intdiv($numero, 2);
                  }
                  $binario = str_pad($binario, 8, '0', STR_PAD_LEFT);

                  $getBin .= $binario . "";
            }
            
            return $getBin;
      }
}

print_r(CountBitsStr:countBits("da um reallllllllllllllllllllllllll"));
