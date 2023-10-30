//entrada 
let n1 = parseInt(prompt("Digite um numero"))
let n2 = parseInt(prompt("Digite um outro valor"))
let contador = 0 
//processamento

if (n1 > n2) {
    for(let i = n1; i >= n2; --i){
        console.log(i)
    }
} else{
    for(let i = n1; i <= n2; ++i){
        console.log(i);
    }
}
//controle


//saida


