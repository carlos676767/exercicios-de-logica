
                                    //historia
confirm("Vendedor: como posso ajudar?")
confirm("Cliente: bom, eu gostaria de saber o valor de dois peixes")
confirm("Vendedor: para saber o valor venha nessa maquina \n e coloque que esta 8 reais e dps a quantidade ")
                                    //entrada
let Preçounitáriodoproduto = Number(prompt(" Vendedor: coloque o valor do \n produto Digite o valor do produto"))
let quantidadedacompra = Number(prompt("Digite a quantidade da compra"))

confirm(`Vendedor: Qual o troco pelos ${quantidadedacompra} peixes?`)

let troco = Number(prompt("Digite o troco"))


//processamento 

let calcularpreco = Preçounitáriodoproduto * quantidadedacompra
let valordotroco = troco - calcularpreco
valordotroco = valordotroco.toFixed(2)


                                      //controle/ saida

if(valordotroco > 0){
    alert(`Senhor (a) o valor do seu troco e de ${valordotroco}`)
} else if(valordotroco < 0) {
    alert(`Dinheiro insuficiente, faltam ${valordotroco} reais`)
} else{
    alert(`Digite um valor valido`)
}





