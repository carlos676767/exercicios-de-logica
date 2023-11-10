let recebernumeros = []
let pares = []

let somar = 0
while(true){
    let digitequantos = parseInt(prompt(`Digite varios numeros`))
    let continuar = parseInt(prompt(`Quer continuar? [0]`))
    recebernumeros.push(digitequantos)
    if (isNaN(digitequantos)) {
        alert(`Digite um numero e nao uma letra`)
    } 
    if (continuar === 0) {
        console.log(`programa encerrado.`);
        break
    }
}

let menor = recebernumeros[0]
for (let i = 0; i < recebernumeros.length; i++) {
    somar += recebernumeros[i];
    if (recebernumeros[i] < menor) {
        menor = recebernumeros[i]
    }
    if (recebernumeros[i] %2 == 0) {
        pares.push(recebernumeros[i])
    }
}

let media = somar / recebernumeros.length

console.log(`a soma de todos numeros e ${somar}`);
console.log(`o numero menor e ${menor}`);
console.log(`A media entre os numeros e ${media}`);
console.log(`no total foram digitados ${pares.length} pares!`);