let vetor = []
for (let i = 0; i < 7; i++) {
    vetor.push(Math.floor(Math.random() * 99))
}

let contador = 0
let posicao = []
for (let i = 0; i < vetor.length; i++) {
       if (vetor[i] %2 === 0) {
        ++contador
        posicao.push(i)
       }
}

console.log(`o total de n pares e ${contador} numeros`);
console.log(`os numeros pares se encontram na posicao `, posicao);