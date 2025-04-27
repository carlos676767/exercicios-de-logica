
<?php


function moveZeros(array $items)
{
    $list = [];
    $removeO = [];

    $listConcat = [];

    for ($i = 0; $i < count($items); $i++) {
        if ($items[$i] === 0) {
            $list[$i] = $items[$i];
        } else {
            array_push($removeO, $items[$i]);
        }
    }

    foreach ($removeO as $vector) {
        array_push($listConcat, $vector);
    }

    foreach ($list as $vector) {
        array_push($listConcat, $vector);
    }

    
    return $listConcat;
}


print_r(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

