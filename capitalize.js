function capitalize(s) {
  let par = ``;
  let impar = ``;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      par += s[i].toUpperCase();

      impar += s[i];
    } else {
      impar += s[i].toUpperCase();
      par += s[i];
    }
  }

  return [par, impar];
}

console.log(capitalize("abcdef"));
