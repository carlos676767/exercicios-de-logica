const verificarAnagramas = () => {
    const palavra1: string = `amor`
    const palavra2: string = `roma`
    const converter1 = palavra1.split(``).sort().join(``)
    const converter2 = palavra2.split(``).sort().join(``)
    console.log(converter1)
    const convertido = converter1 === converter2 ? `e sim` : `nao e`
    console.log(convertido)
   
}

verificarAnagramas()