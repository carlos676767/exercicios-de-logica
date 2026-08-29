function listSquared(m, n) {
    const arrAcc = []
  
    for (let i = m; i <= n; i++) {
      let sum = 0
  
      for (let acc = 1; acc <= i; acc++) {
  
        if (i % acc === 0) {
          sum += Math.pow(acc, 2)
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