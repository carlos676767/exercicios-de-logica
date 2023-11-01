let somar = 0

for(let i = 0; i < 6; ++i){
    const n1 = parseInt(prompt(`Digite um numero`))
    if (n1 >= 0 && n1 <= 10) {
        console.log(`Os numeros ${n1} sao entre 0 e 10`)
    }
    if (n1 %2 !== 0) {
        somar += n1
        console.log(`A soma entre os numeros foi de ${somar}`)
    } else if (n1 < 0) {
        console.log(`O numero e negativo, digite um n positivo`)
    } else{
        console.log(`O numero ${n1} , nao esta entre zero e dez `)
    }
}