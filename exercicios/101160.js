function moveZeros(arr) {
  const o = arr.filter((n) => n === 0);
  const dierent0 = arr.filter((num) => num !== 0);
  return [...dierent0, ...o];
}
