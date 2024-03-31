const matriz: number[][] = [
    [3, 8, 2],
    [5, 1, 6],
    [4, 7, 9],
    [4, 8, 10]
];

const transformarMatrixEmEvetor = matriz.flatMap((vetor) => vetor);

const doubleSort = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                const temp: number = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};

console.log(doubleSort(transformarMatrixEmEvetor));

const valoresUnicos = (array: number[]) => {
    const conjuntoSet = new Set(array)
    return Array.from(conjuntoSet)
}


console.log(valoresUnicos(transformarMatrixEmEvetor));