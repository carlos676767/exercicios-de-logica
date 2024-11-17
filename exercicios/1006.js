function findUniq(arr) {
    return arr.filter((item, indice) => {
  
      return arr.indexOf(item) === arr.lastIndexOf(item);
  
  })[0]
  }
  