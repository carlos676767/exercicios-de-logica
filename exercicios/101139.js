function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split(``).filter((char) => vowels.includes(char)).length;
}
