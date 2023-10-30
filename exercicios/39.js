let tentativa1 = Number(prompt("Primeira tentativa"))

let tentativa2 = Number(prompt("Digite outra tentativa"))

let tentativa3 = Number(prompt("Digite outra tentativa"))

if (tentativa1 > tentativa2 && tentativa1 > tentativa3) {
    alert(`A distancia maior foi ${tentativa1}`)
} else if(tentativa2 > tentativa1 && tentativa2 > tentativa3){
    alert(`A distancia maior foi ${tentativa2}`)
} else{
    alert(`A distancia maior foi ${tentativa3}`)
}

