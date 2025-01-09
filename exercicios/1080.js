class isVow {
  static isVow(char) {
  const vowels =   ["a", "e", "i", "o", "u"];
    const genatareVolwes = [97, 101, 105, 111, 117];
    
    const filterElements = char.filter(chars => {
      return vowels.includes(chars) || genatareVolwes.includes(chars)
    })

    return filterElements.map(chars => {
      return genatareVolwes.includes(chars) ? String.fromCharCode(chars): chars
    }).sort()
  }
}

console.log(isVow.isVow(["e", 121, "e", 97]));