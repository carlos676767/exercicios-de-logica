

function estaticas() {
    let vetor = []
    let pares = []
    let posicao = []
    for (let i = 0; i <= 10; i++) {
        const numero = parseInt(prompt(`Digite ${ -1,i} numero`)) 
        vetor.push(numero)
    }

    for (const i in vetor) {
        if (vetor[i] %2 === 0) {
            pares.push(vetor[i])
            posicao.push(i)
        }
    }
    return {
        vetor,
        pares,
        posicao
    }
}

const valores = estaticas()
console.log(`A quantidade de numeros pares e ${valores.pares}`);
console.log(`Os numeros no array sao ${valores.vetor}`);
console.log(`Os indices dos numeros pares sao ${valores.posicao}`);