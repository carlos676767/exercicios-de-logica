//conte quantas letras existem em um array



function ver(){ //escreve uma funcao
    let somar = 0; //escreve uma variavel que inicia com 0 para somar
    let array = ["carlos" , "silva" , "raissa", "roberto", "silvana"]; //cria uma array
    for(let i = 0; i < array.length; ++i){ //percorre todo o array
       somar += array[i].length //soma minha variavel com o array, o indice i serve para percorrer todas as letras, o length ver os caractrezes.
    }
    return somar //retorna o somar com o valor
}


let resultado = ver() //cria uma variavel que recebe a funcao
console.log(`sua array tem no total de ${resultado} letras`); //exibe o resultado ao usuario.