String.prototype.digit = function() {
    const values = this.split('').join('')
    if(values.length === 0){
      return false
    };
    
    const obetreNUmero = values.match(/\d+/g)[0] || false
    return Number(obetreNUmero) >= 0 && Number(obetreNUmero) <= 9
  };