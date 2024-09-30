function sumTwoSmallestNumbers(numbers) {
  const ordernarNumeros = numbers.sort((a, b) => a - b).slice(0, 2);
  return ordernarNumeros.reduce((acc, ac) => acc + ac);
}
