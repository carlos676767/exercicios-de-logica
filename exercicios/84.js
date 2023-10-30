//criar uma função que receba um array números inteiros. Processar 
//o array e retornar dois outros arrays, um com os números pares e 
//outro com os impares:

                             // passos
//crie uma array
//crie uma funcao
//crie duas array com os nomes par e impar
//use um if para verificar se o numero e par
//use sua variavel par para receber o array
//use outro if para verificar se o numero e impa
//use sua variavel impar para receber o valor
//use o push nas variaveis impa e par, dentro do push coloque o array com indique i que e oq esta sendo percorrido
//retorne os valores e exiba ao usuario.



let array = [2, 7, 10, 5, 8, 3, 12, 1, 6, 9]; //cria uma array

function receber() { //cria uma funcao
    let par = [] //cria uma array par vazia para armazenar
    let impar = [] //cria uma array impa vazia
    for(let i = 0; i < array.length; ++i){ //percorre toda minha array
        if (array[i] %2 == 0) { //pega minha array e faz o resto da divisao, se for igual a zero tenho os pares
            par.push(array[i]) //minha variavel par recebe recebe recebe minha array com indice i que e o indice que esta sendo percorridod.
        }if (array[i] %2!== 0) { //verifica se o numero e impa
        impar.push(array[i]) //minha variavel impar recebe minha array com indice i
        }
      
    } return{par, impar} //retorna os valores.
}

let resultado = receber() //cria uma var que recebe a funcao
console.log(`os numeros pares sao ${resultado.par} e os numeros impares sao ${resultado.impar}`); //exibe os resultados.