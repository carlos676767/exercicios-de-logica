function rentalCarCost(d) {
    const sum = d * 40
    if(d >= 7) return sum - 50
    if(d >= 3) return sum - 20
    
  return sum
  }