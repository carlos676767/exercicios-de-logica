function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
