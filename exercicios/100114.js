function fakeBin(x){
    return x.split(``).map(char => char < 5 ? `0` : `1`).join(``)
  }
  