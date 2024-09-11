function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const receberArr = numbers.slice();
  const indiceNunumeroMinimo = receberArr.indexOf(min);
  receberArr.splice(indiceNunumeroMinimo, 1);
  return receberArr;
}
