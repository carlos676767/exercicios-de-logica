function removeSmallest(numbers) {
    return numbers.slice().sort((maior, menor) => maior - menor).slice(1).sort((a,b) => b - a)
  };
  