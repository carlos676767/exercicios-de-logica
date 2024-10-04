const array = [5, 4, 3, 2, 1];
const doubleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
  }
  return array
};
console.log(doubleSort(array));