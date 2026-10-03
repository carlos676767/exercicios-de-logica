function powersOfTwo(n) {
  const list = [];

  for (let i = 0; i < n + 1; i++) {
    list.push(i ** 2);
  }

  return list;
}
