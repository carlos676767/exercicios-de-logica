let vetor = []
let somar = 0
let media = 0
let posicao = []
let maior = 0
let posicaoidade = 0
for (let i = 0; i < 8; i++) {
    let idade = parseInt(prompt(`Digite sua idade`)) 
    vetor.push(idade)
    somar+= idade
}

media = somar/8

console.log(`A media de numeros e ${media}`);

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 25) {
        posicao.push(i)
    }

    if (vetor[i] > maior) {
       maior = vetor[i]
       posicaoidade = i
    }
}

console.log(`os numeros maiores que 25 se encontram na posicao ${posicao}`);
console.log(`O maior numero digitado e ${maior}`);
console.log(`a maior idade se encontra na posicao ${posicaoidade}`);
