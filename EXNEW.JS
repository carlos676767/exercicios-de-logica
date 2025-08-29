const extrairNumeros = (str) => {
    const sstr = str.split(``)
  
  
    return sstr.map(Number).filter(char => !isNaN(char))
  }