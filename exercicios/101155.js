function vaporcode(string) {
    return string.toUpperCase().split('').filter(char => char !== ' ').join(`  `)
  }
  
  