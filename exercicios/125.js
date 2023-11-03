//entrada
let quantoscasos = parseInt(prompt(`Quantos casos voce ira digitar?`))
let somar = 0
for(let i = 0; i < quantoscasos; ++i){
    let digitenumeros = parseFloat(prompt(`Digite ${quantoscasos} numeros`))
    let mediaponderada = (digitenumeros * 2 + digitenumeros * 3 + digitenumeros * 5) / (2+3 +5)
    somar+= mediaponderada
}

let dividir = somar / quantoscasos
console.log(`a media entre os numeros e de ${dividir.toFixed(2)}`)





