function sum (numbers) {
    return numbers.filter(n => n > 1).reduce((acc, ac) => acc + ac,0)
  }
  
  console.log(sum([1, 5.2, 4, 0, -1]))