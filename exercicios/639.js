function century(year) {
  const ano = (year / 100).toString();
  if (ano.length > 2) {
    const myArr = [...ano[0], ...ano[1]].join("");
    return Number(myArr) + 1;
  } else {
    return Number(ano);
  }
}
module.exports = century;
console.log(century(45678));
