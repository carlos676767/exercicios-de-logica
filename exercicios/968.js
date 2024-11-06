function longestWord(stringOfWords) {
  const str = stringOfWords.split(" ").sort((a, b) => a.length - b.length);
  return str[str.length - 1];
}
