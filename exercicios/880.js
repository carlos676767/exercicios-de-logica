class CifraDeCesar {
    constructor(str, descolcamento) {
      this.str = str;
      this.descolcamento = descolcamento;
    }
  
  
    cifraDeCesar() {
      const value = this.str.toLowerCase().split("");
      const alfabeto = Array.from(Array(26).keys()).map((data) => String.fromCharCode(data + 97) );
  
      if (this.descolcamento > 26) {
        return "O maximo de deslocamento permitido e de 26.";
      }
  
      if(!this.descolcamento || !this.str){
        return 'Coloque os valores pedidos.'
      }
      
      return value
        .map((data) => {
          if (alfabeto.includes(data)) {
            const valoresPosicao =
              alfabeto.indexOf(data) + (this.descolcamento % 26);
            return alfabeto.at(valoresPosicao);
          }
  
          return data;
        })
        .join("");
    }
  }
  
  const cesar = new CifraDeCesar("carlos", 2);
  console.log(cesar.cifraDeCesar());
  


  