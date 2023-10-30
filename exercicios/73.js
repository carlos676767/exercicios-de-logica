//Crie uma array chamada numeros com uma lista de números, por exemplo: [25, 10, 5, 35, 45, 60].

//Escreva uma função chamada encontrarMaiorNumero que aceita essa array como parâmetro.

//Dentro da função, use um loop para percorrer a array e encontrar o maior número na lista.

//Inicialize uma variável chamada maior com o primeiro número da lista.

//À medida que você percorre a array com o loop, compare cada número com o valor atual de maior. Se o número atual for maior do que o valor atual de maior, atualize o valor de maior para o número atual.

//No final do loop, maior conterá o maior número na array.

//Retorne maior como resultado da função.

//Fora da função, chame encontrarMaiorNumero com a array numeros que você definiu e armazene o resultado em uma variável.

//Finalmente, imprima o maior número no console com uma mensagem informativa.



let array = [39,20,70,200,100,150] //array com os numeros

function encontrarMaiorNumero() { //cria uma funcao
    let maior = 39 //cria uma variavel com o numero 39 que no caso e o primeiro numero da lista
    for(let i = 0; i < array.length; ++i){ //percorre cada elemento da minha array
        if (array[i] > maior) { //compara se meu array e maior que minha variavel maior
            maior=array[i] // caso for minha variavel maior recebe minha array i
        }
    } return maior //retorno o maior fora do loop for.
}

let resultado = encontrarMaiorNumero() //puxa minha funcao para receber em uma variavel resultado
console.log(`o numero maior maior e ${resultado}`); //mostra o resultado ao um usuario.