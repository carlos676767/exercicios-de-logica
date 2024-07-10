function sumTwoSmallestNumbers(numbers) {
  let compare = numbers[0];
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < compare) {
      arr.push(numbers[i]);
    }
  }
  return arr.reduce((a, b) => a +b)
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));