// Crie uma classe Termometro que possui uma propriedade
// privada grausCelsius para armazenar a temperatura em graus
// Celsius. Implemente um getter e um setter para essa propriedade.
// Além disso, adicione um método público converterParaFahrenheit que
// converte a temperatura para Fahrenheit e retorna o valor.

class Name {
  private temperatura: number;
  constructor(temperatura: number) {
    this.temperatura = temperatura;
  }

  public set setTemp(temp: number) {
    if (temp < 0) {
      console.log(`digite um numero maior que 0`);
    } else {
      this.temperatura = temp;
    }
  }

  public get getTemp(): number {
    return this.temperatura;
  }

  /**
   * calculeF
   */
  public calculeF() {
    return (this.temperatura * 9) / 5 + 32;
  }
}

const temp = new Name(444);
temp.setTemp = 5;
console.log(temp.getTemp);
console.log(temp.calculeF());
