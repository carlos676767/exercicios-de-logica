class Rot13 {
  str: string;
  constructor(str: string) {
    this.str = str;
  }

  private rot13(): string {
    const str = this.str;
    const alfabeto = Array.from(Array(26).keys()).map((data) => String.fromCharCode(data + 97)   );
    str.split(" ").map((data) => {
      if (alfabeto.includes(data)) {
        const indice = alfabeto.indexOf(data);
        const alfabetIndice = (indice + 13) % 26;
        return alfabeto.at(alfabetIndice);
      }
      return data;
    });
    return str;
  }
  public resultRot13() {
    return this.rot13();
  }
}
