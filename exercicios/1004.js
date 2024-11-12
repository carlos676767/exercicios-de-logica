function longestWord(stringOfWords) {
    return stringOfWords.split(' ').sort((a, b) => a.length - b.length).pop()
  }
  