//funcao que pode ser pausada e voltar
function* contarValores() {
    for (let j = 0; j <= 10; j++) {
        yield j
    }
}

const valores = contarValores()
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());




