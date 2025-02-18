function filterN(arr) {
  return [arr.filter((n) => n % 2 === 0), arr.filter((n) => n % 2 !== 0)];
}
