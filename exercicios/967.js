const fs = require("fs/promises");

const url =
  "E://exercicios logica//exercicios-de-logica//exercicios//anotacoes.txt";

class LerArquivo {
  constructor(url) {
    this.url = url;
  }

  async lerTextos() {
    try {
      const ler = await fs.readFile(this.url, "utf8");
      console.log(ler);
    } catch (error) {
      console.log(error);
    }
  }
}

const ler = new LerArquivo(url);
ler.lerTextos();
