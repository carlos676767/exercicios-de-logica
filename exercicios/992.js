const encontrarElementosRepetidos = (arr) => {
  const count = {};

  arr.forEach((data) => {
    !count[data] ? (count[data] = 1) : ++count[data];
  });

  return Object.keys(count).find((data) => count[data] > 1) || null;
};
