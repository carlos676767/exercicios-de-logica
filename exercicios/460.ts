//faca uma funcao que retorne se o ano e bisexto
const anoBi = (n: number) => {
  if ((n % 4 === 0 && n % 100 != 0) || n % 400 === 0) {
    console.log("e um ano bixexto");
  } else {
    console.log("nao e");
  }
};
anoBi(2040);
