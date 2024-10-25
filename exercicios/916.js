function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    }
    const maior = input.filter(data => data > 0).length;
    const sum = input.filter(data => data < 0).reduce((a, cc) => a + cc, 0);
    return [maior, sum];
  }

  
  