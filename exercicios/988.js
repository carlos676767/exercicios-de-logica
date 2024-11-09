class InverterString {
    constructor(palavra) {
      this.palavra = palavra
    }
  
  
    inverter() {
      return this.palavra.split('').reverse().join('')
    }
  }