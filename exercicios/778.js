function duplicateCount(text) {
  const ignorarLetras = text.toLowerCase().split("");
  const contarPlavras = {};

  ignorarLetras.forEach((data) => {
    if (!contarPlavras[data]) {
      contarPlavras[data] = 1;
    } else {
      ++contarPlavras[data];
    }
  });
  const arr = Object.values(contarPlavras).filter((data) => data > 1).length;
  return arr;
}

console.log(duplicateCount("abcdefghijklabcdefabcdeABCDABCABa"));


