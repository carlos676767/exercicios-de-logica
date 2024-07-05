const maiorPalavra = (palavras) => {
  return palavras.sort((a, b) => a.length - b.length).pop();
};

const ArrayDePalavras = [
  "José",
  "Lucas",
  "Nádia",
  "Fernanda",
  "Cairo",
  "Joana",
];

console.log(maiorPalavra(ArrayDePalavras));
