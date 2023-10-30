//Exercício: Encontre a Soma de Todos os Números em uma Lista

//Crie uma array chamada numeros com uma lista de números, por exemplo: [10, 20, 30, 40, 50].

//Escreva uma função chamada calcularSoma que aceita essa array como parâmetro.

//Dentro da função, use um loop para percorrer a array e somar todos os números na lista.

//Inicialize uma variável chamada soma com zero antes de iniciar o loop.

//À medida que você percorre a array com o loop, adicione cada número à variável soma.

//No final do loop, soma conterá a soma de todos os números na array.

//Retorne soma como resultado da função.

//Fora da função, chame calcularSoma com a array numeros que você definiu e armazene o resultado em uma variável.

//Finalmente, imprima a soma no console com uma mensagem informativa

let array = [10,20,30,40,50] //cria uma array com uma lista que da 150

function calcularSoma() { //cria uma funcao 
    let soma = 0 //determina que na nossa variavel a cada interacao ira add mais um
    for(let i = 0; i < array.length; ++i){ //percorre toda minha array
        soma += array[i] //adiciona minha somar array[i]
    }
    return soma //retorna o valor
}

let resultado = calcularSoma() //armazena a funcao em uma variavel
console.log(`o resultado dos numeros foi de ${resultado}`); //exibe o resultado