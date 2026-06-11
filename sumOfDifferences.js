function sumOfDifferences(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
}
