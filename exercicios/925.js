const palavrasUnicas = (palavra) => {
  const count = {};
  const palavraInArray = palavra.split(" ");

  palavraInArray.forEach((data) => {
    !count[data] ? (count[data] = 1) : ++count[data];
  });

  return Object.keys(count).filter((data) => count[data] === 1);
};
