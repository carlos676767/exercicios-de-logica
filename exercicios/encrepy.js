function encrypt(text, n) {

    const DEFFLTNUM = 0
    if (text.length == DEFFLTNUM || n <= DEFFLTNUM) {
      return ``
    }
  
    for (let j = 0; j < n; j++) {
  
      const spit = text.split("");
  
      const pares = [];
      const impares = [];
  
      for (let i = 0; i < spit.length; i++) {
        if (i % 2 == 0) {
          pares.push(spit[i]);
        } else {
          impares.push(spit[i]);
        }
      }
  
      text = [...impares, ...pares].join("");
    }
  
    return text;
  }
  console.log(encrypt("012345", 1));