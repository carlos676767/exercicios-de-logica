// Exercício: Verificar a posição de um produto na array usando indexOf

let produtos = [`banana`, `uva`, `ventilador`, `oculos`]

function encontreproduto(produto) {
    let receberproduto = produtos.indexOf(produto)
    
    if (receberproduto === -1) {
        console.log(`Produto nao encontrado`);
    }else{
        console.log(`Produto encontrado na posicao ${receberproduto}`);
    }
}

encontreproduto(`oculos`)