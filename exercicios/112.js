let somar = 0
let media 
for(let i = 0; i < 6; ++i){
    let n1 = parseInt(prompt("Digite um valor"))
    somar += n1
    console.log(somar)
    let somar1 = media / n1
    console.log(somar1)
    if (n1 %5 === 0) {
        console.log(n1)
    } if (n1 === null) {
        console.log(`O numero ${n1} e nulo`)
    }
}