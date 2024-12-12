var capitals = function (word) {
  const arr = word.split(``);
  const filter = arr.filter((char) => char === char.toUpperCase());
  return arr.map(char => filter.indexOf(char))
};

console.log(capitals("CodEWaRs"));
