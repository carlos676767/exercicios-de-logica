let quantaspessoas = parseInt(prompt(`Quantas pessoas voce ira digitar?`))
let nome = []
let idade = []
let pessoamaisvelha = 0
for(let i = 0; i < quantaspessoas; ++i){
    let digiteonome = prompt(`Digite o nome da pessoa`)
    let digiteidade = parseInt(prompt(`Digite a idade da pessoa`))

    nome.push(digiteonome)
    idade.push(digiteidade)
}

let maior = idade[0]
for(let j = 0; j < idade.length; ++j){
    if (idade[j] > maior) {
        maior = idade[j]
        pessoamaisvelha = j
    }
}
console.log(`A pessoa mais velha é: ${nome[pessoamaisvelha]} com idade de ${maior} anos.`);