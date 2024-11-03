function sum(numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((acc, ac) => acc + ac, 0);
}
