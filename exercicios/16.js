//passos 

//peca ao usuario a altura, peso e nome.
//crie uma variavel para receber os valores e dps faca os calculos
//verifique os valores do imc de acordo com oq o usuario mandar
//exiba o resultado

//entrada

let nome = prompt("Digite seu nome")
let peso = Number(prompt("Digite seu peso"))
let altura = Number(prompt("Digite sua altura"))

                                 //processamento

let imc = peso/(altura*altura)
imc = imc.toFixed(2)

if (imc < 18.5) {
    alert(`${nome} seu imc e de ${imc}, voce esta abaixo do peso`)
} else if(imc >= 18.6 && imc <= 24.9){
    alert(`${nome} seu imc e de ${imc} , voce esta no peso ideal`)
} else if (imc >= 25.0 && imc <= 29.9) {
    alert(`${nome} seu imc e de ${imc} , voce esta no sobrepeso`)
} else if(imc >= 30.0 && imc <= 34.9){
    alert(`${nome} seu imc e de ${imc} , voce esta na obesidade grau |`)
} else if(imc <= 35.0 && imc <= 39.9){
    alert(`${nome} seu imc e de ${imc} , voce esta obesidade grau || `)
} else{
    alert(`${nome} seu imc e de ${imc} , voce esta na obesidade morbida`)
}

