                         //entrada

let valordoemprestimo = parseInt(prompt("Digite o valor do emprestimo"))

let parcelas = parseInt(prompt("Digite o valor das parcelas"))


                                //processamento


let somar = (valordoemprestimo * 60) / 100
somar+=somar
let dividir = somar/parcelas




                               //saida

alert(`peguei $${valordoemprestimo} e coloquei em ${parcelas} parcelas, irei pagar um total de $${dividir}`)