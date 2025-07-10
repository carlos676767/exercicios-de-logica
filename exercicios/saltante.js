const saltante = (n) => {
    const value = n.toString().split(``).map(Number);
    
    for (let i = 0; i < value.length - 1; i++) {
      const values01 = value[i];
      const valueNext = value[i + 1];
  
      if (Math.abs(values01 - valueNext) !== 1) {
        return false;
      }
    }
  
    return true;
  };
  console.log(saltante(123454));
  