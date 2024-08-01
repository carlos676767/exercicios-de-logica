// //faca uma funcao que receba um numero de 1 a 26 e retorne
// um array com o afalfebto,
// ex, eu escolhi dois entao retorne ae

function retornarAlfabeto(n) {
  let contador = 65;
  const letras = [];
  const vogais = [];
  const newVogais = [];
  while (contador <= 90) {
    let value = String.fromCharCode(contador);
    letras.push(value);
    ++contador;
  }
  for (let i = 0; i < letras.length; i++) {
    if ("AEIOU".includes(letras[i])) {
      vogais.push(letras[i]);
    }
  }
  
  if (n > 5) {
    console.log("o maximo de vogais e 5");
  } else {
    for (let i = 0; i < n; i++) {
      newVogais.push(vogais[i]);
    }
  }
  return newVogais;
}

console.log(retornarAlfabeto(1));
