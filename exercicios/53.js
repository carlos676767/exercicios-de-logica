
let n1 = parseInt(prompt("Digite um numero"))
let somar = 0
let maior = 0

for(let i = 1; i <= n1; ++i){
    somar+= i
    if (i > maior) {
        maior = i

    }
}
console.log(`A soma entre o numero ${n1} e de ${somar}, ${maior}`)


