const perfetNumber = (n) => {
    let sum = 0
    for (let i = 0; i < n; i++) {
      if (n % i === 0) {
        sum += i
      }
  
    }
  
    return sum === n
  }
  
  
  console.log(perfetNumber(6))