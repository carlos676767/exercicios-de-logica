function bump(x) {
  const lists = x.split(``).filter((char) => {
    return char === `n`;
  }).length;

  return lists <= 15 ? "Woohoo!" : "Car Dead";
}

console.log(bump("____n__n_n___n__"));