let vetor = []
for (let i = 0; i < 7; i++) {
    vetor.push(Math.floor(Math.random() * 99))
}

let contador = 0
for (let i = 0; i < vetor.length; i++) {
       if (vetor[i] %2 === 0) {
        ++contador
       }
}

console.log(contador);