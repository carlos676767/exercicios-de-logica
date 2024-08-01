function sumMatrizes(tamanhoMatriz, numeros) {
    const sumMa = [];
    let matrizValueSum = 0;
    const newMatriz = [];
    const matrizes = [];

    for (let i = 0; i < tamanhoMatriz; i++) {
        matrizes[i] = [];
        for (let j = 0; j < tamanhoMatriz; j++) {
            matrizes[i][j] = numeros;
        }
    }

    for (let i = 0; i < matrizes.length; i++) {
        for (let j = 0; j < matrizes.length; j++) {
            matrizValueSum = matrizes[i][j] + matrizes[i][j];
            sumMa.push(matrizValueSum);
        }
    }

    for (let i = 0; i < 2; i++) {
        newMatriz[i] = [];
        for (let j = 0; j < 2; j++) {
            newMatriz[i][j] = sumMa[i];
        }
    }
    return newMatriz;
}

console.log(sumMatrizes(10, 4));
