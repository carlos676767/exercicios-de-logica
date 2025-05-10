function toCamelCase(str) {
    const list = str.replace(/[-_,]/g, ` `).split(` `).filter(Boolean);
  
    const result = list.map(char => {
      return char[0].toUpperCase() + char.slice(1);
    });
  
    result[0] = list[0];
  
    return result.join(``)
  }