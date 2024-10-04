function toCamelCase(str) {
  const obterPrimeirLetra = str[0];

  const values = str
    .toLowerCase()
    .replace(/[_-]/g, " ")
    .split(" ")
    .map((data) => data.charAt(0).toUpperCase() + data.slice(1))
    .join("");

  const primeiraLetraMaiscula = values[0];
  return values.replace(primeiraLetraMaiscula, obterPrimeirLetra);
}

console.log(toCamelCase("the-stealth-warrior"));

//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
