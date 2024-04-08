const array: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
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

const buscarValor = (valorBuscado: number) => {
  for (const pos in array) {
    if (array[pos] === valorBuscado) {
      console.log(`O valor se encontra no indice ${pos}`);
    }
  }
};
doubleSort(array);
buscarValor(1);
