let vetor = []
for (let i = 0; i < 20; i++) {
    vetor.push(Math.floor(Math.random() * 100)) 
}

let numero = parseInt(prompt(`Digite um numero`))


for (let i = 0; i < vetor.length; i++) {
    if (vetor.includes(numero)) {
         vetor.push(Math.floor(Math.random() * 100)) 
    }
}


console.log(vetor);