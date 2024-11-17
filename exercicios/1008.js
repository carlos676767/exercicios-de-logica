function removeSmallest(numbers) {
    const numberMin = [Math.min(...numbers)][0]
    const copyVector = [...numbers]
    const getIndiceMin = copyVector.indexOf(numberMin)
    copyVector.splice(getIndiceMin, 1)
    return copyVector
}

console.log(removeSmallest([1, 2, 3, 4, 5]))