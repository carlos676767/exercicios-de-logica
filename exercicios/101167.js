function findShort(s) {
  const user = s.split(` `);
  const getLength = user.map((char) => char.length);

  return Math.min(...getLength);
}
function getCount(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return str.split(``).filter(n => vogais.includes(n)).length;
  }