let lista: number[] = [5, 4, 3, 2, 1];
const doubleSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] < list[j]) {
        const temp: number = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
};

console.log(doubleSort(lista));
