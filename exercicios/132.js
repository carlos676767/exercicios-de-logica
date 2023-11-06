const quantosnumeros = parseInt(prompt(`Digite a quantidade de numeros`))

let numerospares = []
let quantidadedepares = []
for (let i = 0; i < quantosnumeros; i++) {
    let digite = parseInt(prompt(`Digite um numero`))
    if (digite %2 == 0) {
        numerospares.push(digite)
        quantidadedepares.push(numerospares)

    }
}

console.log(`Os numeros pares sao`, numerospares)
console.log(`A quantidade de numeros pares sao ${quantidadedepares.length}`)