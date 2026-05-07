function sumCubes(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, interatopn) => {
      return acc + Math.pow(interatopn, 3);
    },
    0
  );
}

console.log(sumCubes(9.999999999999999999999999999999999999999999999999999999999999999999999999));
