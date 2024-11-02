class Anagrmas {
  constructor(palavra, palavra2) {
    this.palavra = palavra;
    this.palavra2 = palavra2;
  }

  anagrama() {
    const insverter = [...this.palavra].reverse().join("");

    return this.palavra2 === insverter;
  }
}

const isnatncia = new Anagrmas("amor", "roma");
console.log(isnatncia.anagrama());
