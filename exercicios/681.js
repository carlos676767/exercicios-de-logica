function past(h, m, s){
    const converterHemmini = h * 60 * 60 * 1000
    const minEmMili = m * 60 * 1000
    const sEmMili = s * 1000
    return converterHemmini + minEmMili + sEmMili
    
  }