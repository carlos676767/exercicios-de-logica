let n1 = parseInt(prompt("Digite um numero"))
let contador = 0
for(let i = 1; i <= n1; ++i){
    if (i % 2 == 1) {
        ++contador
        console.log(i)
    }
}