const findPivotIndex = (arr) => {

    const divide = arr.length / 2
  
    const num1 = arr.slice(divide + 1).reduce((a, b) => a + b, 0)
    const num2 = arr.slice(0, divide).reduce((a, b) => a + b, 0)
  
    if (num1 === num2) {
      return arr.indexOf(arr.slice(divide)[0])
    }
  
    return - 1
  }
  
  console.log(findPivotIndex([1, 7, 3, 6, 5, 6]))//// Saída: int(3)