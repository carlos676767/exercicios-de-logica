function sumOfMinimums(arr) {
    return arr.map((c) => {
      return Math.min(...c);
    }).reduce((a, b) => a + b);
  }
  