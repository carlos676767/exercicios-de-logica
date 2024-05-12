//percorrer todo meu vetor
//verificar se o valor e igual negativo
//pego a posicao do meu elemento e troco ele por 0
const vetor: number[] = [10, -4, 20, -5, 2, -21];
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] < 0) {
    vetor.splice(i, 1, 0);
  }
}

console.log(vetor);