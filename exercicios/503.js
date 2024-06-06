function verificarParArray(arr) {
    let contador = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 == 0) {
            ++contador
        }
    }
    return contador
}


module.exports = verificarParArray
