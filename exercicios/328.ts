/*Exercício: Busca Binária**

Implemente o algoritmo de busca binária em uma lista ordenada. 
Crie uma função que recebe uma lista ordenada e um elemento a ser procurado, 
retornando a posição do elemento na lista ou indicando se o elemento não está presente.

Dica: A busca binária é um algoritmo eficiente para encontrar um elemento em uma 
lista ordenada, dividindo repetidamente a lista ao meio.*/

let meuArray: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//ordernando array 
const doubleSort = (list: number[])=> {
    for(let i = 0; i < list.length; ++i){
        for(let j = 0; j < list.length; ++j){
            if(list[i] < list[j]){
                 let temp: number = list[i]
                 list[i] = list[j]
                 list[j] = temp
            }
        }
    }
    return list
}

console.log(doubleSort(meuArray))

//busca indices 

const buscaBinaria = (list: number[]) => {
    const obterIndices = list.indexOf(4)
    if(obterIndices != -1){
       console.log( `o numero se encontra no indice ${obterIndices}`)
    }else{
        console.log(`o numero nao se encontra nos indices`)
    }

    return list
}

buscaBinaria(meuArray)