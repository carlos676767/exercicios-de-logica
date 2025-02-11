<?php



final class MoveZeros
{
    private $list;

    public function __construct(array $list)
    {
        $this->list = $list;
    }


    public function moveZerosToTheEnd()
    {
        $vectorDi = array_filter($this->list, function ($n) {
            return $n !== 0;
        });

        $arrayVector0 = array_filter($vectorDi, function ($n) {
            return $n === 0;
        });

        return array_merge($vectorDi, $arrayVector0);
    }
}
