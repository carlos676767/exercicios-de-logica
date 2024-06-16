


var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    const conjuntoSet = new Set(iterable)
    const array = Array.from(conjuntoSet)
    return array
}

uniqueInOrder()