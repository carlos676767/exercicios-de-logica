let quantidadeatualestoque = parseInt(prompt(`Digite a quantidade de estoque`))
let quantidademaximaemestoque = parseInt(prompt(`Digite a quantidade maxima`))
let quantidademinima = parseInt(prompt(`Digite a quantidade minima`))

let media = quantidademaximaemestoque + quantidademinima/2

if (quantidadeatualestoque >= media) {
    console.log(`pode comprar`);
} else{
    console.log(`nao pode`);
}

