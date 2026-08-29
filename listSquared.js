function listSquared(m, n) {
    const arrAcc = []
  
    for (let i = m; i <= n; i++) {
      let sum = 0
  
      for (let menage = 1; menage <= i; menage++) {
  
        if (i % menage === 0) {
          sum += Math.pow(menage, 2)
        }
      }
  
      const raiz = Math.sqrt(sum)
  
      if (Number.isInteger(raiz)) {
        arrAcc.push([i, sum])
      }
    }
  
    return arrAcc
  }
  
  console.log(listSquared(1, 290))