/*Exercício: Fatorial de um Número

Escreva um programa que calcula o fatorial de um número. O fatorial de um número 
inteiro positivo n é o produto de todos os números inteiros positivos 
menores ou iguais a n. Por exemplo, o fatorial de 5 é 5 x 4 x 3 x 2 x 1.
Peça ao usuário para inserir um número e exiba o fatorial correspondente.
Dica: O fatorial de 0 e 1 é 1. Você pode usar um loop para calcular o 
produto dos números de 1 até o número fornecido*/
let fatorial: number = 1
for(let i = 1; i <= 5; ++i){
    fatorial *= i
}

console.log(fatorial)