<?php



final class encodepa

{
    private $palavra;


    public function __construct(string $palavra)
    {
        $this->palavra = $palavra;
    }


    private function countStr()
    {
        $string = strtolower($this->palavra);


        $count = [];

        for ($i = 0; $i < strlen($string); $i++) {
            if (!isset($count[$string[$i]])) {
                $count[$string[$i]] = 1;
            } else {
                ++$count[$string[$i]];
            }
        }

        return $count;
    }

    private function encode()
    {
        $strConcat = "";

        for ($i = 0; $i < strlen($this->palavra); $i++) {
            if ($this->countStr()[$this->palavra[$i]] > 1) {
                $strConcat .= ")";
            } else {
                $strConcat .= "(";
            }
        }

        return $strConcat;
    }
    
    public  function  returnValues()  {
        return  $this->encode();
    }
}


$list = new encodepa("repetir");
echo $list->returnValues();