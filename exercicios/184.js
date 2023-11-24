let lado1 = parseInt(prompt(`Digite um lado`))
let lado2 = parseInt(prompt(`Digite um outro lado`))
let lado3 = parseInt(prompt(`Digite outro lado`))

function lados(lado1 , lado2, lado3) {
    return lado1+ lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2
}

if (lados(lado1, lado2, lado3)) {
    console.log(`E possivel formar`);
} else{
    console.log(`nao e possivel`);
}