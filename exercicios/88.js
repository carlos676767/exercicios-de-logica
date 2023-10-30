
let resultado = encontrar() //resultado recebe A funcao
console.log(`o maior numero e ${resultado}`); //exibe o resultado
function encontrar() { //cria uma funcao
    let array = [2,10,70,80,8,7,5, 1, 100] //cria uma array
    let saber = 0 //define uma variavel com o zero, ela sera usada para comparar 
    for(let i = 0; i < array.length; ++i){ //percorre toda minha array
        if (array[i] > saber) { //compara se o conteudo do meu array i e maior que saber, e no caso e
            saber = array[i] //saber recebe o maior numero do array
        }
    } return saber //retorna o maior numero
}


//encontrar o menor

function descubramenor() { //cria uma funcao
    let menor = 1 // cria uma variavel com o numero 1 para verificar
    let array = [2,1,2,4,5,67,7,666,6,6,6,8] //cria uma array
    for(let i = 0; i < array.length; ++i){ //faz um loop passando por cada numero
        if (array[i] < menor) { //verifica se meu array e menor que menor.
            menor = array[i] //se for menor recebe array
        }
    } return menor //retorno o valor com o n menor
}

let imprimir = descubramenor() //cria uma variavel que recebea funcao
console.log(`o numero menor e ${imprimir}`); //imprime na tela












//encontre n menor e n maior em uma array


                                            //passo a passo
//crie uma funcao
//crie uma array
//defina dentro da funcao uma variavel maior e menor com indice zero da array
//percorra toda a array
//verifique se o conteudo que tem na sua array e maior que o conteudo de maior
// se for faca sua varioavel maior receber o valor maior da array.
//crie outro if e verifique se o conteudo da sua array e menor que a variavel menor
// se for faca sua variavel menor receber receber a arrray
//retorne os valores.
//crie uma variavel fora da funcao para receber sua funcao.
//exiba os resultados.

function encontrarnumeros() { //cria uma funcao 
    let array = [45,32,21,3,3,4,7,8] //cria uma array
    let maior = array[0] //cria uma variavel maior que inicia com indice 0 da array
    let menor = array[0] //cria uma variavel maior que inicia com indice 0 da array
    for(let i = 0; i < array.length; ++i){ //percorre todo meu array
        if (array[i] > maior) { //verifica se o conteudo que tem no meu array e maior que a variavel maior
            maior = array[i] //se for maior recebe o valor maior.
        } if (array[i] < menor) { //verifica se no meu array o conteudo do array e menor que menor
           menor = array[i]  //se for menor recebe array
        }
    } return {maior, menor} //retorna os valores
}

let resultado2 = encontrarnumeros() //cria uma variavel que recebe a funcao.
console.log(`o maior numero e ${resultado2.maior}, o menor numero e ${resultado2.menor}`); //exibe ao usuario os resultados.

