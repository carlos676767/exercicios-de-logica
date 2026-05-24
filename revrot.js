function revrot(str, sz) {
    if ((str.length == 0 && sz == 0) || sz > str.length) {
      return ``;
    }
    const copy = str.split(``);
  
    const sumDig = copy.map(Number).reduce((a, b) => a + b, 0);
  
    return str
      .split(``)
      .map((c, i) => {
        if (sumDig % 2 === 0) {
          const letter = copy.indexOf(c) + sz;
  
          return copy[letter];
        }
  
        const letter = copy.indexOf(c) - sz;
  
        return copy[letter];
      })
      .join(``);
  }
  
  console.log(revrot("123456987654", 6));
  