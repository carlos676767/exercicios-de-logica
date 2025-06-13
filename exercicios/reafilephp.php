<?php


final class reafilephp 
{
    static private function reafile() {
        return file_get_contents('olaphp.text');
    }


    static public function fileActions(){
        $file = reafilephp::reafile();

        $countStr = strlen($file);

        $strSplit = explode(" ", $file);

        $strCount = [];

        for ($i=0; $i < count($strSplit); $i++) { 
          if ( ! isset($strCount[$strSplit[$i]])) {
          $strCount[$strSplit[$i]] = 1;
          }else{
            ++$strCount[$strSplit[$i]];
          }
        }


        
        return  [
             "o total de caractres " . $countStr,
            "o numero total de palavras " . count($strSplit),
            "o total de cada palavra:\n" . print_r($strCount, true)
        ];
    }
}

print_r(reafilephp::fileActions());


