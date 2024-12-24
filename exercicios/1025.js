function highAndLow(numbers) {
  const list = numbers.split(` `).map(Number);

  return [Math.max(...list), Math.min(...list)].join(` `);
}
