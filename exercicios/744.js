function longestWord(stringOfWords) {
  const arr = stringOfWords.split(" ").sort((a,b) => a.length - b.length)
  return arr.pop()
}
console.log(longestWord("red white blue"));
