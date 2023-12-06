let vetor = []
for (let i = 0; i < 30; i++) {
   vetor.push(Math.floor(Math.random() * 15))
}

let numerochave = parseInt(prompt(`Digite um valor`))

let posicoes = [];
let contador = 0;
let indices = []
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numerochave){
    ++contador;
    indices.push(i)
  }
}

console.log(`O aparece ${contador} vezes`);
console.log(`O numero ${numerochave} aparece nas posicoes ${indices}`);
