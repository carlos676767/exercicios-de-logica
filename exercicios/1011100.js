const square_sum = (n) =>{
    const value = n.map((char)=> Math.pow(char, 2))
    return value.reduce((a, b) => a + b)
  }
  
  console.log(square_sum([1, 2, 2]))