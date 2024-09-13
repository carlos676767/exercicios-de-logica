function isAlt(word) {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    const letrasMyString = word.split("").map(data => vogais.indexOf(data))
    return letrasMyString.filter(data => data != -1)
  }
  