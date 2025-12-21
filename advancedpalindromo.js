function palindromo(str) {
  const v = str
    .toLowerCase()
    .trim()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

  return v.split(` `).reverse().join(` `) == v;
}

console.log(palindromo(`A base do teto desaba`));
