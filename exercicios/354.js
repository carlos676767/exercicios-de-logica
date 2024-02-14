const somarNumero = (n1, n2) => {
    const somar = n1 * n2
    return somar
}

//nome
//processamento
//parametro
//retorno
//chamada

console.log(somarNumero(5,5));
console.log(somarNumero(2,1));

const acharUmvalor = () => {
    const list = [10,20,4,9,2]
    let controle = false
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 25) {
           controle = true
           break
        }
    }
    console.log(controle);
}

acharUmvalor()
