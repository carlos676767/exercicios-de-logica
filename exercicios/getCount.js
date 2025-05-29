function getCount(str) {
  return str
    .toLowerCase()
    .split(``)
    .filter((char) => {
      return [`a`, `e`, `i`, `o`, `u`].includes(char);
    }).length;
}

console.log(getCount("abracadabra"));