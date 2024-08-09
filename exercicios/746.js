function findOutlier(integers) {
    const returnIsArrayPar = 
    integers.filter(data => data %2 !== 0)
    const returnIsPar = integers.filter(data => data %2 == 0)
    return returnIsArrayPar.length  == 1 ? Number(returnIsArrayPar): Number(returnIsPar)
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));