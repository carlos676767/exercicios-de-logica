function findOutlier(integers) {
  const arr = [];
  const arr2 = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 !== 0) {
      arr.push(integers[i]);
    }
  }

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      arr2.push(integers[i]);
    }
  }

  if (arr.length === 1) {
    return Number(arr);
  }

  if (arr2.length == 1) {
    return Number(arr2);
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
