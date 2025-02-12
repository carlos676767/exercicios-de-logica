function findShort(s) {
  const user = s.split(` `);
  const getLength = user.map((char) => char.length);

  return Math.min(...getLength);
}
