function findUniq(arr) {
  let count = {};
  arr.forEach((data) => {
    if (!count[data]) {
      count[data] = 1;
    } else {
      ++count[data];
    }
  });

  for (const key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
