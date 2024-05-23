// Contar o número de vogais em uma string:

// Crie uma função que recebe uma string como parâmetro e
// retorna a quantidade de vogais presentes nela.
// Utilize callbacks para exibir a quantidade de vogais após a contagem.

//callbacks sao funcoes ansc que sao chamadas apos algo ser concluido, basicamente me chame quando estiver pronto

function contarVogais(palavra, callback) {
  let contador = 0;
  const palavras = palavra.split("");
  const vogais = ["a", "e", "i", "o", "u"];
  for (let j = 0; j < vogais.length; j++) {
    if (palavras.includes(vogais[j])) {
      ++contador;
    }
  }
  setTimeout(() => {
    callback(contador);
  }, 3000);
}

contarVogais("carlos", (callback) => {
  console.log(callback);
});
