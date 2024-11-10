class SumDigPow {
  #a;
  #b;
  constructor(a, b) {
    this.#a = a;
    this.#b = b;
  }

  sumDigPow() {
    const results = [];

    for (let num = this.#a; num <= this.#b; num++) {
      const values = String(num).split("").map(Number);

      const elavarValor = values.reduce((sum, digit, index) => {
        return sum + Math.pow(digit, index + 1);
      });

      elavarValor === num ? results.push(elavarValor) : null;
    }

    return results;
  }
}

const sumDigit = new SumDigPow(1, 100);

console.log(sumDigit.sumDigPow());
