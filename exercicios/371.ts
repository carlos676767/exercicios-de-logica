const numero: string = "123" // pede o numero em string
const converterValorEmArray = numero.split("") //transforma em um array
let somar: number = 0 //variavel contadora 
for (let j = 0; j < converterValorEmArray.length; j++) { //percorre meu array 
    somar += Number(converterValorEmArray[j]);
}

console.log(somar); //exibe o resultado