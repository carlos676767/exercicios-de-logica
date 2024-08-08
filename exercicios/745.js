const intDiff = (arr, n) => {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i == j) {
        continue;
      }

      let sum = Math.abs(arr[i] - arr[j]);
      if (sum == n) {
        ++contador;
      }
    }
  }
  return contador;
};

console.log(intDiff(1, 1, 5, 6, 9, 16, 27, 0), 4);
