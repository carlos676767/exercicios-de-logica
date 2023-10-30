//entrada 
let n1 = Number(prompt("Digite uma nota"))
let n2 = Number(prompt("Digite outra nota"))

//processamento

let somar = n1 + n2
somar = somar.toFixed(1)

//controle

if (somar >= 60.0) {
    alert(`Aluno aprovado, nota de ${somar}`)
} else{
    alert(`Aluno nao aprovado, sua nota foi de ${somar}`)
}

