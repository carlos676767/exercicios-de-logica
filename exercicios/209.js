const valor = parseInt(prompt(`Quantos elementos tera cada vetor?`))
let vetor = []
let vetor2 = []

for (let i = 0; i < valor; i++) {
    let numeros = parseInt(prompt(`Digite o valor do 1 vetor`))
    vetor.push(numeros)


    let numeros2 = parseInt(prompt(`Digite o valor do 2 vetor`))
    vetor2.push(numeros2)

}

let c = []
for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor2.length; j++) {
       c.push(vetor[i] + vetor2[j])
    }
}

let newarray = [...new Set(c)]

console.log(`a soma dos vetores e ${newarray}`);
console.log(`primeiro vetor`, vetor);
console.log(`segundo vetor`, vetor2);








