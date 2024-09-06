class FindMissing {
  #array;

  constructor(array) {
    this.#array = array;
  }

  findMissing() {
    const valueOrdenado = this.#array.sort((a, b) => a - b);
    for (let i = 0; i < valueOrdenado.length; i++) {
      const next = valueOrdenado[i] + 1;
      if (!valueOrdenado.includes(next)) {
        return `falta o ${next} na lista`;
      }
    }
    return "nao fatlta numero";
  }
}

const values = new FindMissing([1, 5, 7]).findMissing();
console.log(values);
