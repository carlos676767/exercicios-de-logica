function findOutlier(integers){
    const par = integers.filter(data => data %2 == 0)
    const impar = integers.filter(data => data %2 !== 0)
    
    if(par.length == 1){
      return Number(par)
    }
    return Number(impar)
  }