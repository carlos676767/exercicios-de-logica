/*Exercício: Contagem de Palavras em uma Frase

Escreva um programa que solicite ao usuário que insira uma 
frase e conte o número de palavras na frase. Considere que as 
palavras são separadas por espaços.
Por exemplo, se o usuário inserir "Olá, como você está?", 
o programa deve contar e exibir que há 5 palavras na frase.
Dica: Você pode usar a função split para dividir a frase em palavras e, 
em seguida, contar o número de elementos na matriz resultante*/


const palavra: string = `ola, carlos tudo bem ?`
const contar = palavra.split(` `).length
console.log(contar)