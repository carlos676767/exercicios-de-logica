function first(arr, n = 1) {
  if (n === 0) {
    return [];
  }
  const myArr = [];
  for (let i = 0; i < n; i++) {
    myArr.push(arr[i]);
  }
  return myArr;
}

console.log(first());
