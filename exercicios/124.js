let quantidadesmumeros = parseInt(prompt(`Digite a quantidade de vezes`))

for(let i = 0; i < quantidadesmumeros; ++i){
    let digitenumeros = parseInt(prompt(`Digite um numero`))
    if (isNaN(digitenumeros)) {
        console.log(`digite um numero e nao uma palavra`)
    } else if (digitenumeros == 0) {
        console.log(`O numero e nulo`)
    } else if (digitenumeros < 0 && digitenumeros %2 == 0) {
        console.log(`O numero e ${digitenumeros} par e negativo`)
    } else if (digitenumeros < 0 && digitenumeros % 2 !== 0) {
        console.log(`${digitenumeros} e impar negativo`)
    } else{
        console.log(`${digitenumeros} e impar positivo`)
    }
}