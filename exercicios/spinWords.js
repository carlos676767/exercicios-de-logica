function spinWords(string) {
  return string
    .split(` `)
    .map((char) => {
      return char.length >= 5 ? char.split(``).reverse().join(``) : char;
    })
    .join(` `);
}

console.log(spinWords("Hey fellow warriors"));
