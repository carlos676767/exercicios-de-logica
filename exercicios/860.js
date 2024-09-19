var uniqueInOrder = function (iterable) {
    return  Array.from(iterable).filter((data, i) => data !== iterable[i - 1]) 
   }
   