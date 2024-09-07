function squareSum(numbers) {
  return numbers
    .map((data) => Math.pow(data, 2))
    .reduce((acc, ac) => acc + ac, 0);
}
