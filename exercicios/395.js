const somarNInfinitos = (...paran) => {
  let somar = 0;
  for (let j = 0; j < paran.length; j++) {
    somar += paran[j];
  }
  return somar;
};

console.log(somarNInfinitos(3, 34, 4, 5, 2, 34, 2, 2, 3, 5, 0, 8, 77777));
