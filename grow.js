function grow(x) {
  return x.reduce((a, b) => a * b, 1);
}

console.log(grow([1, 2, 3, 4]));
