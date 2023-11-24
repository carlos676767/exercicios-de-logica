let array = []

function nomes() {
    for (let i = 0; i < 7; i++) {
        let nome = prompt(`Digite um nome`)
        array.push(nome)
    
    }
    const copia = array.slice()
    array.reverse()
    return {
        copia,
        array
    }
}


const exibir = nomes()
console.log(`array original ${exibir.copia}`);
console.log(`Array invertida ${exibir.array}`)


