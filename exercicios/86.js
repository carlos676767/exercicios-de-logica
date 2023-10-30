//primeiro crie uma array
//crie uma funcao
//percorra toda array
//crie uma variavel com zero
//crie uma variavel fora com o numero desejado para saber quantas vezes ele aparece
//pegue sua variavel soma e some ela mais o array
//retorne o valor da soma
//crie uma variavel para receber a funcao
//exiba o resultado no console


                                    //solucao 1
//let array = [2,2,2,2,2,2,2,2]

//function ver() {
    //let soma = 0
    //for (let i = 0; i < array.length; i++) {
      //++soma
    //} return soma
//}

//let resultado = ver()
//let aparecer = 2
//console.log(`o numeros ${aparecer} aparece ${resultado} vezes`);



                                       //solucao 2

let array = [2,3,1,3,4,4,5,3,2,1,2,6,2,2,2] //o 2 aparece 6 vezes

function somas() {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
       if (array[i] == numeros) {
        ++soma
       }  
    } return soma
}

let numeros = 2
let tres = 3 
let resultado = somas()
console.log(`o numero ${numeros} aparece ${resultado} vezes`);



