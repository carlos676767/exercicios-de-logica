function powersOfTwo(n) {
  let i = 0;
  const array = [];
  while (i <= n) {
    array.push(Math.pow(2, i));
    ++i;
  }
  return array;
}
