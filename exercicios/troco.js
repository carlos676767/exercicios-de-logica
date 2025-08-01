function troco(valor) {
  const list = [25, 10, 5, 1];
  const count = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] + list[i] === valor) {
        count.push(list[i], list[j]);

        return count;
      }
    }
  }

  return -1;
}

console.log(troco(30));
