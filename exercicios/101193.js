var uniqueInOrder = function (iterable) {
    const str = iterable.split(``);
    const result = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
        result.push(str[i])
      }
    }
  
    return result.join(``)
  };