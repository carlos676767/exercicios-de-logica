const retornarUltimaPalavra = (palavra, letra) => {
    let contador = 0
    const myArray = palavra.split('')
    for (let i = 0; i < palavra.length; i++) {
        if (letra.includes(palavra[i])) {
            ++contador
        }
    }
    return  myArray.length.includes(contador)
}
console.log(retornarUltimaPalavra('carlosssssss', 's'))

