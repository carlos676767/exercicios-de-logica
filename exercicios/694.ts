class Disemvowel {
  gerarVogais: number[] = [];
  vogais: string[] = [];
  palavra: string;

  constructor(palavra: string) {
    this.gerarVogais = [97, 101, 105, 111, 117, 65, 69, 73, 79, 85];
    this.vogais = this.generateVowels();
    this.palavra = palavra;
  }

  private generateVowels() {
    const vogais: string[] = [];
    let i: number = 0;

    while (i < this.gerarVogais.length) {
      vogais.push(String.fromCharCode(this.gerarVogais[i]));
      ++i;
    }

    return vogais;
  }

  public retiredVogal() {
    let myPalavra: string = "";
    for (let i = 0; i < this.palavra.length; i++) {
      const palavra = this.palavra[i];
      if (!this.vogais.includes(palavra)) {
        myPalavra += palavra;
      }
    }
  }
}
