class Stray {
  static stray(numbers) {
    const count = {};
    numbers.forEach((char) => {
      if (!count[char]) {
        count[char] = 1;
      } else {
        count[char]++;
      }
    });
    const values = Number(Object.keys(count).find((chars) => count[chars] === 1));
    return values > 0 ? values : null;
  }
}
