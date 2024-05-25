
// uma funcao geradora e uma funcao que 
// pode ser pausada e continuada

function* imprimirValores() {
    let contador = 0
    while (contador < 10) {
        yield ++contador
    }
};

const valoresContados = imprimirValores()
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());
console.log(valoresContados.next());