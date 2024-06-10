function positiveSum(arr) {
  if (arr.length == []) {
    return 0;
  }

  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      sum += arr[j];
    }
  }
  return sum;
}

console.log(positiveSum([-2]));