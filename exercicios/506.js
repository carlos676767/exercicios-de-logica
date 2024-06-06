
function valoresUnicos(array) {
    const valoresUnicos = new Set(array)
    return Array.from(valoresUnicos)
}

module.exports = valoresUnicos