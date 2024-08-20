function nbDig(n, d) {
  let digitCount = 0;
  let currentNumber = 0;
  const digitAsString = d.toString();

  if (n >= 0 && d >= 0 && d <= 9) {
    while (currentNumber <= n) {
      const square = Math.pow(currentNumber, 2).toString();
      const squareDigits = square.split("");

      for (let i = 0; i < squareDigits.length; i++) {
        if (squareDigits[i] === digitAsString) {
          ++digitCount;
        }
      }
      ++currentNumber;
    };
  };

  return digitCount;
}

console.log(nbDig(10, 1)); //0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
