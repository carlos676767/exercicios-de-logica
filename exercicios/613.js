function refatureCod(url) {
    const buscarIndiceElement = url.split("").indexOf("#"); //peguei o indice
    return buscarIndiceElement != - 1 ? (() => {
        url.splice(buscarIndiceElement)
        return url.join('')
    })() : null
}