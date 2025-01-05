const dontGiveMeFive = (start, end) => {
  const numbers = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );
  return numbers.filter((char) => char !== 5).length;
};

