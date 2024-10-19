class whatCentury {
  constructor(ano) {
    this.ano = ano;
  }

  whatCentury() {
    const duracaoSeculo = 100;
    const seculoAtual = Math.ceil(this.ano / duracaoSeculo);
    const divisaoSeculo = seculoAtual % 10;

    if (seculoAtual % 100 >= 11 && seculoAtual % 100 <= 13) {
      return seculoAtual + "th";
    }

    const objectValue = {
      1: "st",
      2: "nd",
      3: "rd",
    };

    if (objectValue[divisaoSeculo] === undefined) {
      return seculoAtual + "th";
    }

    return seculoAtual + objectValue[divisaoSeculo];
  }
}

const ano = new whatCentury(2000);
ano.whatCentury();
