

const toCamelCase = (str) => {
  const caractres = [`-`, `_`];

  const filterStr = str.split(``).filter((char) => !caractres.includes(char));

  if (filterStr[0] !== filterStr[0].toUpperCase()) {
    const Lower = filterStr[0];
    return Lower.toUpperCase() + filterStr.slice(1).join(``);
  }

  return filterStr.join(``);
};

console.log(toCamelCase("The_Stealth-Warrior"));
console.log(toCamelCase("the-stealth-warrior"));
