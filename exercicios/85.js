//cria uma array
//cria uma funcao 
//percorre toda minha array
//cria uma variavel soma que recebe zero
// crie uma variavel media 
//retorne o valor da media
//exiba o valor


let array = [20,20,10,15] //cria uma array

function calcular() { // cria uma funcao de calcular
    let soma = 0 //cria uma variavel soma com zero , zero pos iran somar com os outros
    let media //cria uma var media que vai exibir a media
    for(let i = 0; i < array.length; ++i){ //percorre todo meu array
        soma+=array[i] //soma meu array mais a variavel soma
        media = soma/array.length //divide a soma pelo array para obter a media
    } return media //retorna a media
}

let resultado = calcular() //guarda minha funcao em uma variavel
console.log(`a media de numeros e ${resultado}`); //exibe o resultado

