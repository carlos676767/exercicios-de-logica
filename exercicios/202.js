let contador = 0
let vetor = []
let notas = 0
do {
    ++contador
     notas = parseInt(prompt(`Digite uma nota`))
    vetor.push(notas)
}while(contador < 10)

//percorre o vetor
let somar = 0
let alunos = 0
for (const i in vetor) {
   somar+= vetor[i]
}


for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        ++alunos
    }
    
}
let media = somar/vetor.length
console.log(`exatamente ${alunos} tiveram acima da media`);
console.log(`A media da turma e ${media}`);


