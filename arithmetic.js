function arithmetic(a, b, operator) {
  const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
  };

  const eqyat = operations[operator](a, b);
  return eqyat;
}
console.log(arithmetic(1, 2, "add"));
