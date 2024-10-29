function remove(string) {
    const palavra = string.split('')
    const ultimaLetra = palavra[palavra.length - 1]
  
    if(ultimaLetra === '!'){
      
       return palavra.slice(0, -1).join('')
    }
    return ultimaLetra.join('')
  };
  