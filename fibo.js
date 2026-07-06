function productFib(prod) {
    let f1 = 0;
    let f2 = 1;
  
    while (f1 * f2 < prod) {
      let next = f1 + f2;
      f1 = f2;
      f2 = next;
    }
  
    const result = f1 * f2;
    return [f1, f2, result == prod];
  }
  
  console.log(productFib(4895));
  