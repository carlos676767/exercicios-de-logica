// Escreva uma função que recebe uma lista de strings e uma função callback como argumentos
//  e retorna uma nova lista contendo as strings da lista original modificadas de acordo
//  com a função callback.
// A função callback deve receber uma string como argumento e retornar a string
//  modificada.

function retornarNovaString(palavra, callback) {
    const palavras = []
    for (let j = 0; j < palavra.length; j++) {
        palavras.push(palavra.splice(palavra[j], j, '@'))
    }
    callback(palavras)
}

retornarNovaString(["carlos", "silva", "bannaa", "joao"], (callback) => {
    console.log(callback);
})