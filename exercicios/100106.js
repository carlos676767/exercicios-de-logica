function moveZeros(arr) {
    const filterZERO = arr.filter(number => number === 0)
    const arrayNOTzERO = arr.filter(n => n !== 0)
    return [
      ...arrayNOTzERO, ...filterZERO
    ]
  }
  
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]))