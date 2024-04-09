const array: number[] = [1, 2, 3, 4, 5];
const pegarValores: number[] = [];

let valor: number = array[0];

for (let j = 0; j < array.length; j++) {
  if (valor < array[j]) {
    valor = array[j];
  }
  if (array[j] < valor) {
    valor = array[j];
  }
}

console.log(valor);
