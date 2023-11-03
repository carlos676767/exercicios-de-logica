
let km = parseInt(prompt(`Digite quantos km seu carro rodou`))
let dias = parseInt(prompt(`Digite a quantidade de dias`))

let kmrodado = km / 0.20
let custototal = 95 * dias
let somartudo = kmrodado + custototal

alert(`Se você pegar o carro por ${dias} dias, irá pagar um total de R$${custototal} de aluguel. 
Se rodar ${km} km, o custo adicional será de R$${kmrodado}. 
No final, sua dívida total ficará em R$${somartudo}.`)