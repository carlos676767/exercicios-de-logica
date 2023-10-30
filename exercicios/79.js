let array = [2,10,15,30,25,10,100]
let resultado = encontrar()
console.log(`o resultado e ${resultado}`);
function encontrar() {
    let maior = 0
    for(let i = 0; i < array.length; ++i){
        if (array[i] > maior) {
            maior = array[i]
        }
    } return maior
}

