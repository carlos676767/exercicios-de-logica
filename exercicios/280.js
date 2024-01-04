const comprarCarro = () => {
    const valorCarro = parseInt(prompt(`Digite o valor do carro`))
    const porcentagemDistribudior = valorCarro * 0.28
    const impostos = valorCarro * 0.45
    const valorDoCarro = (porcentagemDistribudior + impostos + valorCarro)
    alert(`O valor original do seu carro e ${valorCarro} e com os impostos ficara ${valorDoCarro}`)
}

comprarCarro()