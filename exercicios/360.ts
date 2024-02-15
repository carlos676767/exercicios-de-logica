const buscarLinear = () => {
    const list: number[] = [10, 25, 140, 87];
    const acharValor: number = 10
    const filtrarNumeros = list.filter(numero => numero === acharValor);
    const verificarValor = filtrarNumeros.includes(acharValor) ? true : false
    console.log(verificarValor)
}

buscarLinear()