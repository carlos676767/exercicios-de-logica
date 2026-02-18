function narcissistic(value) {
    const lentStr = String(value).length
    const narcistsNmber = String(value).split(``).reduce((a, b) => {
      return a + Math.pow(Number(b), lentStr)
    }, 0)
  
    return narcistsNmber === value
  }
  