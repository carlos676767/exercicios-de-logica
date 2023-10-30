//Exercício: Escreva um programa que calcule a soma de todos os números 
//pares  e impares de 1 a 100 e imprima o resultado.


function somar() { //cria uma funcao
    let pares = 0 //cria uma variavel pares
    let impares = 0 //cria uma variavel impares para somar
    for(let i = 1; i < 100; ++i){ //percorre meu numero de 1 a 100
        if (i %2 == 0) { //verifica se o numero e par
           pares += i // se for soma 0 + os numeros pares.
        }if (i %2 !== 0) { //verifica se o numero e impar
           impares +=i // soma 0 + os numeros impares.
        }
    }return{impares, pares} //retorna o valor.
}


let resultado = somar() //faz minha variavel receber a funcao
console.log(`o resultado dos numeros impares sao de ${resultado.impares}`); //exibe o resultado
console.log(`o resultado dos numeros pares sao de ${resultado.pares}`); //exibe o resultado.