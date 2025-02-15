function getCount(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return str.split(``).filter(n => vogais.includes(n)).length;
  }
  
  console.log(getCount("abracadabra"))

  