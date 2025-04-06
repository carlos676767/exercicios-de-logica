<?php

function square_sum(array $numbers) : int {
    return array_sum(array_map(fn($n) => pow($n, 2), $numbers));
  }


print_r(square_sum([1, 2, 2]));

