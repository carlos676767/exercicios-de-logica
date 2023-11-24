function contador(inicio, fim, incremento) {
    for ( inicio = 0; inicio <= fim; inicio += incremento) {
        console.log(inicio);
    }
}

let inicio = parseInt(prompt(`Inicio`))
let fim = parseInt(prompt(`Digite o fim`))
let incremento = parseInt(prompt(`incremento`))

contador(inicio, fim, incremento)