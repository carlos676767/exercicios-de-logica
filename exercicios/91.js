// criar uma array
//crie uma funcao
//crie uma array vazia
//crie uma variavel com um determinado criterio
//percorra todo o array
//faca uma verificacao 
//faca seu array vazio receber o array
//retorne o valor
// crie uma variavel para receber a funcao
//exiba o resultado

let array = [3,5,7,9,3,21,78,3,2,1,3,2,1,20,40,60,89]
let resultado = retornar()
console.log(resultado);
function retornar() {
    let criterio = 15
    let vazia = []
    for(let i = 0; i < array.length; ++i){
        if (array[i] < criterio) {
            vazia.push(array[i])
        }
    } return vazia
}