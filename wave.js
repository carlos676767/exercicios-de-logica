function wave(str) {
    const lenStr = str.length;
  
    const fillStr = Array(lenStr).fill(str);
  
    return fillStr.map((c, i) => {
      if (c[i] === ' ') return null;
    
      return c.slice(0, i) + c[i].toUpperCase() + c.slice(i + 1);
    }).filter(Boolean);
  }
  
  console.log(wave(`carlos `));
  