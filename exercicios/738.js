function sumArray(array) {
  if (!Array.isArray(array) || array == null || array.length == 0) {
    return 0
  } 
  return array.sort((a, b) => a - b)
  .slice(1, array.length - 1).reduce((a, b) => a + b, 0);
}

console.log(sumArray([6, 2, 1, 8, 10]));
