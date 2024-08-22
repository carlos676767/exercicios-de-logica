function strCount(str, letter) {
  let contador = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] == letter) {
      ++contador;
    }
    ++i;
  }
  return contador;
}
