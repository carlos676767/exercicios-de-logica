// uma funcao geradora e uma funcao que 
// pode ser pausada e continuada


function* fibonanci() {
    let contador = 0, contador2 = 1;
    while (true) {
        contador;
        yield [contador, contador2] = [contador2, contador + contador2]
    }
}

const gerador = fibonanci()
console.log(gerador.next().value);
