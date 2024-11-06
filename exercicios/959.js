function XO(str) {
    const filtrarX = str.toLowerCase().split('').filter(data => data === 'x').length
    const filtrarO = str.toLowerCase().split('').filter(data => data === 'o').length
    return filtrarO === filtrarX
  }
  
  