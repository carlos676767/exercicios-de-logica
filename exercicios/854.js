function powersOfTwo(n) {
  return Array.from(Array(n + 1).keys())
  .map((data) => Math.pow(2, data));
}

console.log(powersOfTwo(4)); //[1, 2, 4, 8, 16]
