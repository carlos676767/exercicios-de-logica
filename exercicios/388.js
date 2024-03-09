const retornarValorUnico = () => {
    const array = [1, 1, 2]
    let somar = 0
    for (let j = 0; j < array.length; j++) {
        somar ^= array[j]
    }
    console.log(somar);
}

retornarValorUnico()