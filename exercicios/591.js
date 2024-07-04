//2. Exercício 2: Contar caracteres que são letras maiúsculas*
//- Escreva uma função que receba uma string como argumento e retorne o
// número de caracteres que são letras maiúsculas.

function countUpperCase(str) {
  let contador = 0;
  const palavra = Array.from(str);
  palavra.forEach((data) => {
    const value = palavra.split('').chartAtCode();
    if (value >= 65 && value <= 90) {
      ++contador;
    }
  });
  return contador;
}

console.log(countUpperCase("Hello World!")); 
