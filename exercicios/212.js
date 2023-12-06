const vetor = []

for (let i = 0; i <= 12; i++) {
    vetor.push(Math.floor(Math.random() * 99))
}
console.log(vetor);
let n1 = parseInt(prompt(`Digite um numero`))
let n2 = parseInt(prompt(`Digite um numero outro n`))
console.log(n1, n2);

function somarvalores(n1,n2) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor.includes(n1, n2)) {
            return n1 + n2
        } else{
            return `numeros nao encontrados`
        }
    }
}
console.log(somarvalores(n1, n2));