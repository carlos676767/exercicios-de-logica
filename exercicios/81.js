let array = [1,10,20,9,5,9]
let resultado = somarN()
console.log(`a  soma de todos os numeros ${resultado}`);

function somarN() {
    let somar = 0 //serve para ocomular a soma dos numeros
    for(let i = 0; i < array.length; ++i){
        somar+= array[i]
    } return somar
}

