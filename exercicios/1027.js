function hasUniqueChars(str) {
  const uniqueValue = str.split(``);
  return new Set(uniqueValue).size === uniqueValue.length;
}