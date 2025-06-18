const perfetNumber = (n) => {
  return (
    Array.from(Array(n).keys())
      .filter((val) => n % val === 0)
      .reduce((a, b) => a + b, 0) === n
  );
};

console.log(perfetNumber(28));
