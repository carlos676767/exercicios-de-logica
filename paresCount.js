function countPares(n) {
    const obj = {
      pares: [],
      impares: [],
      totalPares: 0,
      totalImpares: 0,
    };
  
    for (let i = 0; i <= n; i++) {
      if (i % 2 == 0) {
        obj.pares.push(i);
      } else {
        obj.impares.push(i);
      }
    }
  
    obj.totalPares = obj.pares.length;
    obj.totalImpares = obj.impares.length;
  
    return obj;
  }