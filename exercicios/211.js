function parouimpa(n1) {
    if (n1 %2 === 0) {
        return `par`
    } else{
        return `impar`
    }
}

const numero = parseInt(prompt(`Digite um numero`))
console.log(`O numero e `,  parouimpa(numero));