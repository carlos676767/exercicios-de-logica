function getCount(str) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(str[i])) {
      ++contador;
    }
  }
  return contador;
}

console.log(getCount("carlos"));
