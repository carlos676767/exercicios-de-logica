
let carro = parseInt(prompt("Digite quantos km"))
let km = 5

if (carro > 80) {
   let dinheiro = carro * km
   let resultado = dinheiro - 400
   alert(`voce foi multado por $${resultado}, pos atingiu ${carro}`)
} else{
   alert(`voce nao pegou multa`)
}


