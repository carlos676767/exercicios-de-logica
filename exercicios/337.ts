const arrayDeNumeros: number[] = []
const obterNumeros = () => {
    while (true) {
        const inputNumero: string | null = prompt(`Digite números`);
        if (inputNumero !== null) {
            let numeroConvertido: number = parseInt(inputNumero);
            arrayDeNumeros.push(numeroConvertido)
        } else {
            console.log("Nenhuma entrada fornecida.");
        }

        const continuar = confirm(`Deseja parar?`)
        if (!continuar) {
            alert(`Programa encerrado`)
            break
        }
    }
}

obterNumeros()

const contarNumerosInferioresHa35 = () => {
    let contador = 0
    for (let i = 0; i < arrayDeNumeros.length; ++i) {
        if (arrayDeNumeros[i] < 35) {
            ++contador
        }
    }
    console.log(`o total de numeros inferiores a 35 sao de ${contador}`)
}

contarNumerosInferioresHa35()

const mediaDeNumerosPositivos = () => {
    let somar: number = 0
    for (let i = 0; i < arrayDeNumeros.length; ++i) {
        if (arrayDeNumeros[i] > 0) {
            somar += arrayDeNumeros[i]
        }
    }
    const media = somar / arrayDeNumeros.length
    console.log(`A media de numeros pistivos e de ${media}`)
}

mediaDeNumerosPositivos()

const percentualDeNumeros = () => {
    let totalDeNumeros = arrayDeNumeros.length;
    let contadorDeNumerosNoIntervalo = 0;

    for (let i = 0; i < arrayDeNumeros.length; ++i) {
        if (arrayDeNumeros[i] >= 50 && arrayDeNumeros[i] <= 100) {
            contadorDeNumerosNoIntervalo++;
        }
    }

    const percentual = (contadorDeNumerosNoIntervalo / totalDeNumeros) * 100;
    console.log(`o penenctaul de numeros entre 50 e 100 e de ${percentual}`)
}
percentualDeNumeros()

const porcentagemEntre20E0 = () => {
    let contador: number = 0
    let percentual: number = 0
     for (let i = 0; i < arrayDeNumeros.length; ++i) {
        if(arrayDeNumeros[i] >= 20 && arrayDeNumeros[i] <= 10){
            ++contador
        }
        if(arrayDeNumeros[i] < 50){
             percentual = (contador / arrayDeNumeros[i]) * 100;
        }
    }
    console.log(`o percentual e de ${percentual}`)
}
percentualDeNumeros()

