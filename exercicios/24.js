let x = Number(prompt("Digite o valor de X"))
let y = Number(prompt("Digite o valor de Y"))

//processamento

if(x > 0 && y > 0){
    alert(`o ponto esta no Q1`)
} else if(x > 0 && y < 0){
    alert(`o ponto esta no Q4`)
} else if(x < 0 && y > 0){
    alert(`O ponto esta no Q2`)
} else if(x < 0 && y < 0){
    alert(`o ponto esta no Q3`)
} else{
    alert(`Digite um valor`)
}
