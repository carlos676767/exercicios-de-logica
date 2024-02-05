/*Exercício: Contagem de Vogais
Escreva um programa que solicite ao usuário que insira uma palavra ou frase 
e conte o número de vogais (a, e, i, o, u) presente na entrada.
Por exemplo, se o usuário inserir "Hello, World!", o programa 
deve exibir que há 3 vogais (e, o, o).
Dica: Converta a entrada para minúsculas antes de contar as vogais para garantir 
que todas as vogais sejam contabilizadas, independentemente de estarem em maiúsculas ou minúsculas*/

const nome: string = `carlos` //carlos tem 2 vogais
const vogais: string[] = [`a`, `e`, `i`, `o`,`u`]
let contador = 0
for(let i = 0; i < vogais.length; ++i){
    if(nome.includes(vogais[i])){
        ++contador
    }
}

console.log(`Existe um total de ${contador} na string ${nome}`)