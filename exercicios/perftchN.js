function findNextSquare(sq) {
    const v = Math.sqrt(sq)
  
    return Number.isInteger(v) ? (v + 1) ** 2 : -1
  }