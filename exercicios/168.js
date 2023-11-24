let vetor = []
for (let i = 0; i < 20; i++) {
    vetor.push(Math.floor(Math.random() * 100))
    
}
for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length; j++) {
        if (vetor[i] < vetor[j]) {
            let temp = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = temp
        }
    }
}

console.log(vetor);