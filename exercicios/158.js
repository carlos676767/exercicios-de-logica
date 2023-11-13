function numerosmaiores() {
    let array = [2,4,7,8,3,1, 99,8, 900]
    let maior = array[0]
    array.forEach(element => {
        if (element > maior) {
            maior = element
        }
    });
    return maior
}

let resultado = numerosmaiores()
console.log(resultado);
