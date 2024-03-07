const palavra = "O rato roeu a roupa do rei de Roma".replace(/\s/g, "");

const separarPalavra = palavra.split("");
console.log(separarPalavra);

let contador = 0;
let vogais = ["a", "e", "i", "o", "u"];
for (let i = 0; i < separarPalavra.length; i++) {
  if (vogais.includes(separarPalavra[i])) {
    ++contador;
  }
}

console.log("existe", contador);
