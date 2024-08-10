function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] % 2 !== 0 && array[j] % 2 !== 0) {
        if (array[i] < array[j]) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
}

console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
const arr = ['carlos'].reduceRight