function indexOf(head, value) {
    let inicio = 0;
    let fim = head.length - 1;
  
    while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);
      const list = head[meio];
  
      if (list === value) {
        return meio; 
      } else if (list > value) {
        fim = meio - 1;
      } else {
        inicio = meio + 1;
      }
    }
    return -1;
  }
  