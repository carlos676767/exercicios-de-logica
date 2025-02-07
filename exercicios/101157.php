<?php



final class IndexOf
{
    static public function indexOf(array $head, int $value)
    {
        $inicio = 0;
        $fim = count($head) - 1;

        while($inicio < $fim){
            $meio = (floor($inicio + $fim)/2);
            $chute = $head[$inicio];

            if ($chute == $value) {
                return $meio; 
            } elseif ($chute > $value) {
                $fim = $meio - 1;
            } else {
                $inicio = $meio + 1;
            }

            return -1; 
        }
    }
}
