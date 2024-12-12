function squareSum(numbers) {
  return numbers
    .map((char, i) => Math.pow(char, 2))
    .reduce((acc, ac) => acc + ac, 0);
}
