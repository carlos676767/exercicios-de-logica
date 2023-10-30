
let produtos = [
    { codigo: 1, preco: 5.00 },
    { codigo: 2, preco: 3.50 },
    { codigo: 3, preco: 4.80 },
    { codigo: 4, preco: 8.90 },
    { codigo: 5, preco: 7.32 }
];
console.table(produtos);v 

let Codigodoprodutocomprado = parseFloat(prompt("Digite o codigo do produto"))
let Quantidadecomprada = parseFloat(prompt("Digite a quantidade comprada"))


switch(Codigodoprodutocomprado){
    case 1: {
        let somar = Quantidadecomprada * produtos[0].preco
        somar = somar.toFixed(2)
        alert(`Voce comprou ${Quantidadecomprada} e pagou ${somar}`)
        break
    }
    case 2: {
        let somar = Quantidadecomprada * produtos[1].preco
        somar = somar.toFixed(2) 
        alert(`Voce comprou ${Quantidadecomprada} e pagou ${somar}`)
        break
    }
    case 3: {
        let somar = Quantidadecomprada * produtos[2].preco
        somar = somar.toFixed(2) 
        alert(`Voce comprou ${Quantidadecomprada} e pagou ${somar}`)
        break
    }
    case 4: {
        let somar = Quantidadecomprada * produtos[3].preco
        somar = somar.toFixed(2) 
        alert(`Voce comprou ${Quantidadecomprada} e pagou ${somar}`)
        break
    }
    case 5: {
        let somar = Quantidadecomprada * produtos[4].preco
        somar = somar.toFixed(2) 
        alert(`Voce comprou ${Quantidadecomprada} e pagou ${somar}`)
        break
    }
    default: {
        alert(`selecione uma opcao correta`)
    }
}
