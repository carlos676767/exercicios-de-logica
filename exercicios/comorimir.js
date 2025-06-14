const comorimir = (char) => {
    const countObject = {
  
    }
  
    for (let i = 0; i < char.length; i++) {
      if (!countObject[char[i]]) {
        countObject[char[i]] = 1
      } else {
        ++countObject[char[i]]
      }
    }
  
    const uniqueKeys = Array.from(new Set(char))
   
    const valuesCountys = uniqueKeys
      .map((myStr) => {
        return myStr + countObject[myStr];
      })
      .join(``);
  
    
  
    return valuesCountys.length >= char.length ? char : valuesCountys
  }
  