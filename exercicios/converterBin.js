function binToDec(bin) {
    let value = 0
    let po = 0
    for (let i = bin.length - 1; i >= 0; i--) {
  
      if (bin[i] === `1`) {
        value += Math.pow(2, po)
      }
      ++po
    }
  
    return value
  }