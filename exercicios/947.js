decodeMorse = function(morseCode){

  
    return morseCode.split(' ').map(data => MORSE_CODE[data]  || '')
      .join('')  
  }