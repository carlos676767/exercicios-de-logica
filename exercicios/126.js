let n1 = parseInt(prompt(`Digite o primeiro número:`))
let n2 = parseInt(prompt(`Digite o segundo número:`))

if (n1 < 0 || n2 < 0) {
    console.log(`Impossível calcular`)
}else{
    let resultado = n1 / n2
    console.log(`Divisão: ${resultado}`)
}
