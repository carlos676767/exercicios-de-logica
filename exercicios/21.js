//entrada 

let larguradoterreno = parseInt(prompt("Digite a largura"))
let comprimentodoterreno = parseInt(prompt("Digite o comprimento"))
let metroquadrado = parseInt(prompt("Digite o valor do metro quadrado"))

//processamento

let area = comprimentodoterreno * larguradoterreno
let preco = area * metroquadrado

area = area.toFixed(2)
preco = preco.toFixed(2)
                                   //saida
alert(`A area do terreno e de ${area} e o valor e de ${preco}`)