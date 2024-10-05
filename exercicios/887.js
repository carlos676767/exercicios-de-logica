function positiveSum(arr) {
    return arr.filter(data => data  > 0).reduce((acc, ac) => acc + ac,0)
  }