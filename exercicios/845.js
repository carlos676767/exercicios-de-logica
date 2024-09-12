function count(string) {
  const count = {};
  let i = 0;
  while (i < string.length) {
    !count[string[i]] ? (count[string[i]] = 1) : ++count[string[i]];
    ++i;
  }
  return count;
}
