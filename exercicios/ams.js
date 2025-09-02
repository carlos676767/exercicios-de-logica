const ams = (list) => {

    const str = String(list)
  
    return str.split(``).map(char => {
      return Math.pow(Number(char), str.length)
    }).reduceRight((a, b) => a + b, 0).toString() === str
  }
  
  