function countPositivesSumNegatives(input) {
    
    if (!Array.isArray(input) || input.length === 0) {
      return [
        
      ];
    }

    let countPositive = 0;
    let sumNegative = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositive++;
      } else if (input[i] < 0) {
        sumNegative += input[i];
      }
    }
  
    
    return [countPositive, sumNegative];
  }
  