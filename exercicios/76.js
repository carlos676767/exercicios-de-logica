let array = [5,3,4,6,10,20] // cria uma array 

function encontrarNumerosPares() { //cria uma funcao que encontra numeros pares
    let numerosPares = [] //cria uma array vazia que irareceber os numeros pares
    for(let i = 0; i < array.length; ++i){ //percorre toda minha array
        if (array[i] %2 == 0) { //verifica se minha array os numeros sao dividos por 2 caso for retorna par
            numerosPares=array //recebo meus numeros pares
        }
    } return numerosPares //retorna o valor fora do loop
}

let resultado = encontrarNumerosPares() //recebe minha funcao em uma variavel.
console.log(`os numeros pares sao ${resultado}`); //imprime na tela o resultado.