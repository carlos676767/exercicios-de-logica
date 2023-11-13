
function palavrasfiltrtadas() {
    let receber = [];
    let palavras = ["cachorro", "gato", "computador", "lua", "sol"];
    for (let i = 0; i < palavras.length; ++i) {
        if (palavras[i].length == 3) {
            receber.push(palavras[i]);
        }
    }return receber;
}


let resultado = palavrasfiltrtadas()
console.log(receber);