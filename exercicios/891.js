var uniqueInOrder = function (iterable) {
  const arrComValoresUnicos = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
      arrComValoresUnicos.push(iterable[i]);
    }
  }

  return arrComValoresUnicos;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
