var uniqueInOrder = function (iterable) {
    const str = iterable.split(``);
    for (let i = 0; i < str.length; i++) {
      str[i] != str[i] + 1 ? str[i] : null
    }
  
    return str
  };
  