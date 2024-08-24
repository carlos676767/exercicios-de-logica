class valueNumber {
  #array;
  constructor(array) {
    this.#array = array;
  }

  #transformArray() {
    let i = 0;
    const newArr = [];
    while (i < this.#array.length) {
      newArr.push(i + 1 + ": " + this.#array[i]);
      ++i;
    }
    return newArr;
  }
}

const value = new valueNumber(["a", "b", "c"]); //["1: a", "2: b", "3: c"]
console.log(value.transformArray());
