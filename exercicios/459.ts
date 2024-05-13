//se o indice for par pego ele e somo +2 no valor
//se for impa o indice o valor e pego e tirado - 3


const vetorA: number[] = [];
const vetorB: number[] = new Array(10);

let contador: number = 0;
while (contador <= 9) {
  ++contador;
  const numeros = Number(prompt("Digite 10 numeros"));
  vetorA.push(numeros);
}

for (let i = 0; i < vetorA.length; ++i) {
  if (i % 2 === 0) {
    vetorB.push(vetorA[i + 2]);
  } else {
    vetorB.push(vetorA[i - 3]);
  }
}

console.log(vetorA);