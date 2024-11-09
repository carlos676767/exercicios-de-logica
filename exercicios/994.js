function solve(s) {
    const novoVetor = [...s].filter(data => !['a', 'e','i', 'o', 'u'].includes(data))
    const alfabeto = Array.from(Array(26).keys()).map(data => String.fromCharCode(data + 97))
    return novoVetor.map(data => alfabeto.indexOf(data)).reduce((acc, ac) => acc + ac, 0)
  };
  
  console.log(solve('zodiac'))