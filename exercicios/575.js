// You will be given an array of numbers. You have to sort the odd
// numbers in ascending order while
// leaving the even numbers at their original positions.

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      for (let h = 0; h < array.length; h++) {
        for (let y = 0; y < array.length; y++) {
          if (array[h] < array[y]) {
            const temp = array[h];
            array[h] = array[y];
            array[y] = temp;
          }
        }
      }
    }
  }
  return array
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
