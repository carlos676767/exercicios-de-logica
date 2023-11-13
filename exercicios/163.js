// Exercício: Verificar a posição de uma cor na array usando indexOf

let cores = ["vermelho", "verde", "azul", "amarelo", "roxo"];

function encontrarcores(cor) {
    let recebercores = cores.indexOf(cor)

    if (recebercores === -1) {
        console.log(`A cor nao foi encontrada`);
    } else{
        console.log(`A cor foi encontrada na posicao ${recebercores}`);
    }
}
encontrarcores(`azul`)
