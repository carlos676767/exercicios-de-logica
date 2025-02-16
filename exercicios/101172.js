function highAndLow(numbers) {
  const list = numbers.split(` `).map(Number);
  return [Math.max(...list), Math.min(...list)].join(` `);
}

console.log(highAndLow("1 2 3 4 5"));
