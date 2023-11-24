let vetor = []

for (let i = 0; i < 30; i++) {
   vetor.push(Math.floor(Math.random()* 15)) 
}

console.log(vetor);

let numeros = parseInt(prompt(`Digite um numero`))

let contador = 0
let posicao = ``
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeros) {
        posicao = vetor.indexOf(numeros)
        ++contador
    }
    
}

if (posicao !== -1) {
    console.log(`o numero ${numeros} foi encontrado na posicao ${posicao}`);
    console.log(`O numero foi achado ${contador} vezes`);
} else{
    console.log(`numero nao encontrado`);
}