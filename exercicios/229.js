let vetorIdade = []
let vetorPeso = []



function pedirIdadeEpeso() {
    for (let i = 0; i < 7; i++) {
        let idade = parseInt(prompt(`Digite sua idade`))
        let peso = parseInt(prompt(`Digite seu peso`))
        vetorIdade.push(idade)
        vetorPeso.push(peso)
    }
}

pedirIdadeEpeso()

function estaticasIdades() {
    let somar = 0
    for (let i = 0; i < vetorIdade.length; i++) {
        somar+=vetorIdade[i]
    }

    let media = somar/vetorIdade.length
    return media
}


function estaticasPeso() {
    let contarPeso = 0
    for (let i = 0; i < vetorPeso.length; i++) {
        if (vetorPeso[i] >= 90) {
            ++contarPeso
        } 
    }
    return contarPeso
}



console.log(`Exatamente ${estaticasPeso()} tem mais de 90kg`);
console.log(`A media de idades entre as 7 pessoas e de ${estaticasIdades()}`)

