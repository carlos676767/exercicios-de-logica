function moveZeros(arr) {
    const filter0 = arr.filter(arr => arr === 0)
    const filtyerNot0 = arr.filter(arr => arr !== 0)
  
    return [
      ...filtyerNot0,
     ...filter0
    ]
  
  }