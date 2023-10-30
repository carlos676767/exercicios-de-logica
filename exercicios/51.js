//entrada 

let n1 = parseInt(prompt("Digite um numero"))
let n2 = parseInt(prompt("Digite outro"))
//controle
if (n1 % n2 == 0 || n2 % n1 == 0) {
    alert(`Os numeros ${n1} e ${n2} sao multiplos`)
} else{
    alert(`Nao sao multiplos`)
}


