const palavra1: string = "amor";
const palavra2: string = "roma";
const converterPalavra1 = palavra1.split("").reverse().join("");
const converterPalavra2 = palavra2.split("").reverse().join("");
if (converterPalavra1 === palavra2 && converterPalavra2 === palavra1) {
  console.log("anagramas");
} else {
  console.log("nao sao anagramas");
}
