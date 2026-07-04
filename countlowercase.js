function lowercaseCount(str) {
    const uppercase = str.toLowerCase();
  
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (uppercase[i] === str[i] && uppercase[i] !== str[i].toUpperCase()) {
        ++count;
      }
    }
  
    return count;
  }
  