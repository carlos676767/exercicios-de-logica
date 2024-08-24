function sumMix(x){
    return x.map(arr => {
      if( typeof arr === 'string'){
        return Number(arr)
      }
      return arr
    }).reduce((acc, a) => acc + a)
  }