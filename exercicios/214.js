
let vetor = [];
for (let i = 0; i < 40; i++) {
    vetor.push(Math.floor(Math.random() * 99));
}

let somar = 0
// Acumula os valores no próprio vetor
for (let j = 1; j < vetor.length; j++) {
    vetor[j] += vetor[j -1]
    somar+= vetor[j]
}

console.log("Vetor Resultante:", vetor);
console.log(somar);
