//Faça um algoritmo que leia a nota de 
//10 alunos de uma turma e guarde-as em
//um vetor. No final, mostre:
//a) Qual é a média da turma
//b) Quantos alunos estão acima da média da turma
//c) Qual foi a maior nota digitada
//d) Em que posições a maior nota aparece



//inicia as variaveis
let contador = 0
let vetor = []
let somar = 0
let maior = 0
let posicao = 0
let contar = 0
//faz o loop
do {
    let notas = parseInt(prompt(`Digite uma nota`))
    vetor.push(notas)
    ++contador
} while(contador < 10)

//faz um loop que percorre minha array

for (let i = 0; i < vetor.length; i++) {
    somar+= vetor[i]
    if (vetor[i] > maior) {
       maior = vetor[i]
       posicao = i
    }
}

for (let j = 0; j < vetor.length; j++) {
    if (vetor[i] > media) {
        ++contar
    }  
}
//calcula a media

let media = somar/vetor.length

console.log(`a) A media de idade da turma e de ${media}`);

//exibe a a maior nota

console.log(` B) A maior nota e ${maior}`);

//exibe a posicao 

console.log(` C) A maior posicao se encontra na ${posicao}`);

console.log(` D) Extamente ${contar} estao acima da media`);


