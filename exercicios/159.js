function geraraleatorio() {
    let array = []
    for (let i = 0; i < 20; i++) {
         array.push(Math.floor(Math.random() * 100)) 
         array.sort(((o,p) => o - p))
    }
    return array
}

const lista = geraraleatorio()
console.log(lista);