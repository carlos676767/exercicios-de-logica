function countPositivesSumNegatives(input) {
  return input.length == 0 || !Array.isArray(input)
    ? []
    : [
        input.filter((n) => n > 0).length,
        input.filter((n) => n < 0).reduce((acc, ac) => acc + ac, 0),
      ];
}
