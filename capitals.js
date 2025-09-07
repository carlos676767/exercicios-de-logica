var capitals = function (word) {
  const str = word.split(``);
  const indice = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= `A` && str[i] <= `Z`) {
      indice.push(i);
    }
  }

  return indice;
};

console.log(capitals("CodEWaRs"));