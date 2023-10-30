let array = [5,10,30,50]

function encontrarMaiorEMenor() {
    let maior = 5
    let menor = 5
    for(let i = 0; i < array.length; ++i){
        if (array[i] > maior) {
            maior = array[i]
        }
        if (array[i] < menor) {
            menor = array[i]
        }
    }return { maior: maior, menor: menor };
    
}

let resultado = encontrarMaiorEMenor()
console.log(`o numero maior e ${resultado.maior}`);
console.log(`o numero menor e ${resultado.menor}`);
