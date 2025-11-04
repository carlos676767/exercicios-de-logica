function digitalRoot(n) {
 

    while (n >= 10) {
      let sum = 0;
      const str = String(n);
      const list = [];
  
      
      for (let i = 0; i < str.length; i++) {
        list.push(Number(str[i]));
      }
  
      for (let i = 0; i < list.length; i++) {
        sum += list[i];
      }
  
      n = sum;
    
    }
  
    return n
  }
  