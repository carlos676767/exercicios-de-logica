const palavraMaisLonga = (palavra) => {
  const myPalavra = palavra.split(" ");
  const obterNumeros = myPalavra.map((data) => data.length);
  const obterMaior = Math.max(...obterNumeros);

  const indice = obterNumeros.indexOf(obterMaior);

  return myPalavra.at(indice);
};

console.log( palavraMaisLonga( "Esta é uma frase de exemplo para encontrar a palavra mais longa"));
