let n1 = parseInt(prompt(`Digite um valor`))
let n2 = parseInt(prompt(`Digite outro valor`))
let quantos = parseInt(prompt(`Digite a quantidade de numeros que voce quer ver`))
let num = 0

while (quantos > 0) {
    if (num%n1 == 0 || num%n2 == 0) {
        console.log(num);
        --quantos
    }
    ++num
}