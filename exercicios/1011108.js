var uniqueInOrder = function (iterable) {
  const count = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      count.push(iterable[i]);
    }
  }

  return count;
};
