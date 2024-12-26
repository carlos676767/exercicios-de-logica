function findShort(s) {
  const order = s.split(` `).sort((a, b) => a.length - b.length);
  return order[0].length;
}
