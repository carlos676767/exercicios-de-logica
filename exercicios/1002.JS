function alphabetPosition(text) {
    const alfabeto = Array.from(Array(26).keys()).map(arr => String.fromCharCode(arr + 97))
  
    const removeAll = text.replace(/[.'"]/g, '').replace(/\bo' \w+/g, '').replace(/[^a-zA-Z0-9\s]/g, '');
    const novasLetras = [...removeAll].filter(data => data !== " ").map(data => data.toLowerCase())
  
    return novasLetras.map(data => alfabeto.indexOf(data) + 1).filter(data => data != 0).join(' ')
};
