function high(x) {
    const vowels = Array.from(Array(26).keys()).map(chars => String.fromCharCode(chars+97))
    const str = x.toLowerCase().split(` `)
    const strsValues =str.map(chars =>  {
      const value = chars.split(``).map(dataValue => vowels.indexOf(dataValue) + 1).reduce((a, b) => a + b)
      return value
    })
  
    const maxVALUE = Math.max(...strsValues)
    const position = strsValues.indexOf(maxVALUE)
    return str[position]
  }
  
  
  console.log(high('man i need a taxi up to ubud'))


