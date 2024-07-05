const maiorPalavra = (palavras) => {
  let Maior = "";
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > Maior.length) {
      Maior = palavras[i];
    }
  }
  return Maior;
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

(async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res = data.json()
    console.log(res);
  } catch (error) {
    console.error(err)
  }finally{
    console.log('testes');
  }
})();
