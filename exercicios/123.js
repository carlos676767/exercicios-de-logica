let quantidadeNumeros = parseInt(prompt(`Quantos números você deseja digitar?`))
let dentroIntervalo = 0
let foraIntervalo = 0

for(let i = 0; i < quantidadeNumeros; ++i){
    let numero = parseInt(prompt(`Digite um número:`))
    if (numero >= 10 && numero <= 20) {
        ++dentroIntervalo
    } else {
        ++foraIntervalo
       
    }
}

console.log(`O número ${dentroIntervalo} está dentro do intervalo.`)
console.log(`O número ${foraIntervalo} está fora do intervalo.`)