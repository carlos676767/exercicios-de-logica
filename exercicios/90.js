//crie uma array de numeros
//crie uma funcao
//crie um criterio
//crie um loop
//vou usar uma verificao para pegar so x numeros
// retorna o numero
// criar uma variavel para receber a funcao
//exibir ao usuario

let array = [1,2,34,30,21,9,3,10,123,5,4,56,78,101] //cria um array
let resultado = saber() //cria uma variavel para receber a funcao
console.log(resultado) //exibe o resultado
function saber(){ //cria uma funcao
  let criterio = 15 //cria uma variavel com o criterio de numeros acima de 15
  let limpa = [] //cria uma array vazia que recebe os numeros acima de 15
  for(let i = 0; i < array.length; ++i){ //percorre todo meu array
    if(array[i] > criterio){ //compara se array e maior que criterio
      limpa.push(array[i]) //se for meu array limpo recebe os numeros maiores que 15
    } 
  } return limpa // retorna o valor.
}




