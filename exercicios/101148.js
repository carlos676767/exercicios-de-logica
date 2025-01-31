function findShort(s) {
  const strR = s.split(` `).sort((a, b) => a.length - b.length);
  return strR[0].length;
}
