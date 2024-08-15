class FakeBin {
  private numeroStr: string;
  constructor(numeroStr: string) {
    this.numeroStr = numeroStr;
  }
  //Dada uma sequência de dígitos, você deve substituir qualquer dígito abaixo de
  //  5 por '0' e qualquer dígito 5 e superior por '1'. Retorne a string resultante.
  public fakeBin() {
    const strNumber: string = this.numeroStr;
    return strNumber
      .split("")
      .map((data) => (data > "5" ? (data = "1") : (data = "0")))
      .join("");
  }
};

const newValues = new FakeBin("45385593107843568");
console.log(newValues.fakeBin());

