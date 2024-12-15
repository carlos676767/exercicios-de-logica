function findUniq(arr) {
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      ++count[arr[i]];
    }
  }
  const findUnique = Object.keys(count).find((char) => count[char] === 1);
  return Number(findUnique);
}
