//eu tenho X reais, quantos dolares eu posso comprar?

                               //entrada
let reais = parseInt(prompt("valor de reais em maos"))

                      //processamento

let cotacao = 5.05

let dividir = reais/cotacao

dividir = dividir.toFixed(2)

                          //saida

alert(`com ${reais} voce pode comprar ${dividir} dolares$`)



