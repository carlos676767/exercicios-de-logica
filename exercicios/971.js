function stray(numbers) {
    let count = {
  
    }
    
    for (let i = 0; i < numbers.length; i++) {
      !count[numbers[i]] ? count[numbers[i]] = 1 : ++count[numbers[i]]
    }
  
    const valueUm = Object.keys(count).filter(value => count[value] === 1)
    return Number(valueUm)
  }