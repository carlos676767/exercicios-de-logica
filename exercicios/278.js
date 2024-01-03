const informacoes = (n1, n2) => {
    const somar = n1+n2
    const produtos = n1 * n2
    const quociente = n1 / n2
    
    return {somar, produtos, quociente}
}

console.log(informacoes(1,2));