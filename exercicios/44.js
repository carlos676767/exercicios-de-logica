//entrada

let valorDoproduto = Number(prompt("Digite o valor do produto"))
let Quantidadecomprada = Number(prompt("Digite a quantidade de compras"))
let Dinheirorecebido = Number(prompt("Digite o valor recebido"))


//processamento

valorDoproduto = valorDoproduto.toFixed(2)

let compra = valorDoproduto * Quantidadecomprada

let troco = Dinheirorecebido - compra
troco = troco.toFixed(2)

alert(`O valor do seu produto foi de ${valorDoproduto} e voce comprou \n ${Quantidadecomprada} unidades, o seu troco foi de ${troco}`)