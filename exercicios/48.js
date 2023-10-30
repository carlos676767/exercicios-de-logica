let contador = 0 
let quantos = parseInt(prompt("Digite um numero de alunos"))
let maior = 0
while (contador < quantos) {
    let aluno = prompt("Digite um nome de um aluno")
    let nota = parseInt(prompt("Digite uma nota"))
    if (nota > maior) {
        maior = nota;
        console.log(`O aluno (a) ${aluno} teve a maior nota que foi ${maior}`);
    } else {
        console.log(`Digite um número nos inputs`);
    }    
    ++contador
}