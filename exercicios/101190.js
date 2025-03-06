function uniqueInOrder(iterable) {
  const strInArr = iterable.split(``);
  return strInArr.filter((arr, i) => arr !== strInArr[i - 1]);
}