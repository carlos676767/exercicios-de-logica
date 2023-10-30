//entrada
let a = Number(prompt("Digite um valor de A"))
let b = Number(prompt("Digite um valor de B"))
let c = Number(prompt("Digite um valor de C"))

//processamento

const discriminante = b ** 2 - 4 * a * c;


let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);


x1 = x1.toFixed(4)
x2 = x2.toFixed(4)


if (discriminante === 0) {
    alert(`Digite uma raiz real`)
} else{
    alert(`O valor de x1 e de ${x1} e o valor de ${x2}`)
}





