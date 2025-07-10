const countVogs = (str) => {
  const vogais = `aeiouAEIOU`.split(``);


  return Array.from(new Set(Array.from(str))).filter((char) =>
    vogais.includes(char)
  ).length;
  
};

console.log(countVogs("ssoommee"));