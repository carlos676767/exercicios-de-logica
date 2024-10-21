function buscaBinaria(array, elemento) {
  const vetorOrdenado = array.sort((a, b) => a - b);
  let inicio = 0;
  let fim = vetorOrdenado.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (array[meio] === elemento) {
      return meio;
    } else if (array[meio] > elemento) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }

  return -1;
}

console.log(buscaBinaria([4, 87, 9, 8, 6, 2], 2));
