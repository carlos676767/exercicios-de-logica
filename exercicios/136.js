const quantoselementos = parseInt(prompt(`Digite quantos elementos tera o vetor`))
let vetor = []
let pares = []
let somar = 0

for (let i = 0; i < quantoselementos; i++) {
    let digite = parseInt(prompt(`Digite os numeros`))
    vetor.push(digite)
}

for (let i = 0; i < vetor.length; i++) {
   if (vetor[i] %2 == 0) {
    pares.push(vetor[i])
    somar+=vetor[i]
   }
}

let media = somar / pares.length
console.log(`A soma de todos os elementos na array e ${somar}`);
console.log(`A media de numeros e ${media}`);