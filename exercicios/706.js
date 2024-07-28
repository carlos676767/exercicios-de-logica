function removeChar(str) {
  let palavra = "";
  let i = 1;
  while (i < str.length - 1) {
    palavra += str[i];
    ++i;
  }

  return palavra;
}
console.log(removeChar("carlos"));
