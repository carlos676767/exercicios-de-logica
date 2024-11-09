class DubleSort {
  constructor(array) {
    this.array = array;
  }

  ordernarVetor() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length; j++) {
        if (this.array[i] < this.array[j]) {
          const temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;
        }
      }
    }

    return this.array;
  }
}

const vector = new DubleSort([5, 2, 8, 1, 3]);
console.log(vector.ordernarVetor());
