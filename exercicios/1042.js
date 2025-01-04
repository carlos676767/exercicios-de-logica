class Positivesum {
  static positive_sum(arr) {
    return arr.filter((char) => char > 0).reduce((a, b) => a + b, 0);
  }
}

console.log(Positivesum.positive_sum([1, -4, 7, 12]));
