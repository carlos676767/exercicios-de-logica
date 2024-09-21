function countPositivesSumNegatives(input) {
    if(!input || input.length == 0) return []
  
    const negative =  input.filter(data => data > 0).length
    const positive = input.filter(data => data < 0).reduce((acc, ac) => acc + ac, 0)
  
    return [negative, positive]
  }

  

