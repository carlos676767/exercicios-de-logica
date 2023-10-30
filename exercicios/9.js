                                         //passos
// crie um prompt de altura e peso
//fazer os calculos com peso e altura
//verificar de acordo com as contas
//retornar os valores                                   
                                         //entrada
let peso = parseFloat(prompt("digite seu peso"))
let altura = parseFloat(prompt("digite sua altura"))



                                         //processamento
           
let imc = peso / (altura * altura);

imc = imc.toFixed(2)
                                         //controle

if (imc <= 18.5) {
    alert(`seu imc e de ${imc}, voce esta abaixo do peso`)
    console.log(imc)
} else if (imc >= 18.6 && imc <= 24.9) {
    alert(`seu imc e de ${imc}, voce esta no peso ideal`)
} else if(imc >= 25.0 && imc <= 29.9){
    alert(`seu imc e de ${imc}, voce sobrepeso`)
} else if(imc >= 30.0 && imc <= 34.9){
    alert(`seu imc e de ${imc}, Obesidade grau I`)
} else if (imc >= 35.0 && imc <= 39.9) {
    alert(`seu imc e de ${imc}, Obesidade grau II`)
}else{
    alert(`vai morrer`)
}