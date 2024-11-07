function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((ac, acc) => acc + ac, 0)
  }
  
  console.log(arrayPlusArray([7,4, 4], [6,8,9]))