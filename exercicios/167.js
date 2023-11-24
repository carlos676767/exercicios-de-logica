function valores() {
    let array = []
    let somar = 0
    let media = 0
    let alunos = 0
    let maior = 0
    let posicao = 0
    for (let i = 0; i <= 10; i++) {
        let nota = parseInt(prompt(`Digite uma nota`))
        array.push(nota)
    }
    for (let i = 0; i < array.length; i++) {
        somar+= array[i]
        if (array[i] > maior) {
            maior = array[i]
            posicao = i
        }
    }
    media = somar/ array.length
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > media) {
            ++alunos
        }
    }

    return {
        alunos,
        media,
        maior,
        posicao
    }
}

let resultado = valores()
console.log(`a media dos alunos e de ${resultado.media}`);
console.log(`exatamente ${resultado.alunos} estao acima da media`);
console.log(`a maior nota foi ${resultado.maior}`);
console.log(`o maior numero se encontra na posicao ${resultado.posicao}`);

