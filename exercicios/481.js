
function findAverage(array) {
    let somar = 0
    let media = 0
    if (array.length == []) {
        return 0
    } else {
        const contarNumeros = array.map(callback => {
            somar += callback
            media = somar/array.length
        })
    }
    return media
}
