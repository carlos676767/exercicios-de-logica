/*Escreva um programa que verifique se um ano é bissexto ou não. Um ano é bissexto se for 
divisível por 4, mas não por 100, a menos que também seja divisível por 400.
Peça ao usuário para inserir um ano e exiba se é bissexto ou não.*/
const ano: number = 2000

if(ano %4 == 0 || ano %400 == 0){
    console.log(`bissexto`)
}else{
    console.log(`nao e `)
}