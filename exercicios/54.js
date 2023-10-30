let x = parseInt(prompt("Digite um numero"))
let somar = 0
for(let i = 0; i <= x; ++i){
    if (x <= 10 && x <= 20) {
       somar += i
       console.log(`${x} esta no intervalo de 10 a 20`)
    } else{
        console.log(`nao esta no intervalo definido`)
    }
}