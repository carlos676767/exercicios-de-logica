
class UniqueInOrder {
  constructor(iterable) {
    this.iterable = iterable;
  }

  uniqueInOrder() {
    const vectorLetras = Array.from(this.iterable);
    const vectorSemLetrasProximas = [];

    for (let i = 0; i < vectorLetras.length; i++) {
      if (vectorLetras[i + 1] != vectorLetras[i]) {
        vectorSemLetrasProximas.push(vectorLetras[i]);
      }
    }
  }
}


module.exports = UniqueInOrder