//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
//brancos, nulos e válidos. Calcular e escrever o percentual que cada um 
//representa em relação ao total
//de eleitores


//entrada
let eleitores = parseInt(prompt(`Digite o total de eleitores`))
let brancos = parseInt(prompt(`votos brancos`))
let nulos = parseInt(prompt(`Digite votos nulo`))
let validos = parseInt(prompt(`Digite votos validos`))

//processamento

const totalbrancos = (brancos/eleitores) * 100
const totalnulos = (nulos/eleitores) * 100
const totalvalidos = (validos/eleitores) * 100


//saida
console.log(`O total de votos brancos e ${totalbrancos}`);
console.log(`O total de votos nulos e ${totalnulos}`);
console.log(`O total de votos validos e ${totalvalidos}`);