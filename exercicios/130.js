let quantosnumeros = parseInt(prompt(`Digite quantos numeros vai digitar`))
let somar = 0
let array = []
for(let i = 0; i < quantosnumeros; ++i){
    let digite = Number(prompt(`Digite os numeros`))
    array = digite //recebi os valores
    somar += array //somei
}
let media = somar/quantosnumeros
console.log("Números digitados:", array);
console.log("Soma dos números:", somar);
console.log("Média dos números:", media);