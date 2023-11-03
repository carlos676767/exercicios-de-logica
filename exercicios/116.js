let opcoes = parseInt(prompt(`Digite [1] para saber seu produto com 5% de desconto\n Digite [2] para saber seu produto com 10% de desconto\n [3] para sair`))

let Digite = parseInt(prompt(`Digite o valor do produto`))


switch(opcoes){
    case 1: {
        let desconto = Digite * 0.05
        let subtrair = Digite - desconto
        alert(`Seu produto com 5% de desconto fica de ${subtrair}`)
        break
    }
    case 2: {
        let desconto = Digite * 0.10
        let subtrair = Digite - desconto
        alert(`Seu produto com 10% de desconto fica de ${subtrair}`)
        break
    }
    case 3: {
        alert(`Programa encerrado!`)
        break
    }
    default: {
        alert(`Digite um valor valido`)
    }
}