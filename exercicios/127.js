function numeros() {
    let maior = []
    let array = [2,34,3,2,9,2,3]
    array.forEach(element => {
        if (element > maior) {
            maior = element
        }
    });
    return maior
}

let resultado = numeros()
console.log(resultado);