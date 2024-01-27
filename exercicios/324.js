const array = [5, 4, 3, 2, 1];
const doubleSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (list[i] < list[j]) {
            let temp = list[i]
            list[i] = list[j]
            list[j] = temp
        }
    }
  }
  return list
};
console.log(doubleSort(array));