
function rot13(message) {
    const alfabetoMinusculo = Array.from(Array(26).keys()).map(data => String.fromCharCode(data +97))
    const maisculoAlfabeto = Array.from(Array(26).keys()).map(data => String.fromCharCode(data + 65))
    const str =  message.split("").map(data => {
        if (alfabetoMinusculo.includes(data)) {
            const indicesAlfabeto = alfabetoMinusculo.indexOf(data)
            const indice = (indicesAlfabeto + 13) % 26;
            return alfabetoMinusculo[indice]
        }
        if (maisculoAlfabeto.includes(data)) {
            const indicesAlfabeto = maisculoAlfabeto.indexOf(data)
            const indice = (indicesAlfabeto + 13) % 26;
            return maisculoAlfabeto[indice]
        }
        return data
    }).join("")
    return str
}
