/*Busca Binária: Implemente o algoritmo de busca 
binária para encontrar um elemento em uma lista ordenada*/

const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const doubleSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] < list[j]) {
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
};

doubleSort(array);

const busca = () => {
  let procurar = array.indexOf(1);
  if (procurar !== -1) {
    console.log(`se encontra na posicao ${procurar}`);
  } else {
    console.log(`o numero nao se encontra na posicao`);
  }
};

busca();
