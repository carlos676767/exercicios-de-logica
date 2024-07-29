function digi(n) {
    const str = String(n);
    const numbers = [];
    for (let i = str.length - 1; i >= 0; --i) {
      numbers.push(Number(str[i]));
    }
    return numbers;
  }