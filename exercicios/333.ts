/*Exercício: Verificação de Palíndromo Numérico
Escreva um programa que verifique se um número é um palíndromo numérico. 
Um palíndromo numérico é um número que permanece o mesmo quando lido da 
esquerda para a direita e vice-versa.
Por exemplo, 121 é um palíndromo numérico.
Peça ao usuário para inserir um número e exiba se é um 
palíndromo numérico ou não*/

const numeros: string  = `121`
const inveterN = numeros.split(``).reverse().join(``)
console.log(inveterN)