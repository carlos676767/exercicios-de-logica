function arithmetic(a, b, operator) {
  const aritimetricas = {
    add: "+",
    subtract: "-",
    divide: "/",
    multiply: "*",
  };

  const result = aritimetricas[operator];
  return eval(`${a} ${result} ${b}`);
}
console.log(arithmetic(1, 2, "add"));
