const between = (a, b) => {
    const numbers = Array.from(
    { length: b - a + 1 }, 
    (_, index) => a + index
  );
  return numbers
};
console.log(between(1, 10));