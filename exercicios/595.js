//3. *Exercício 3: Verificar se uma string contém apenas números*
-(
  // Escreva uma função que receba uma string como argumento e retorne
  //true se todos os caracteres da string forem números (0-9) e false caso contrário.

  function isNumeric(str) {
    const validar = /^\d+$/.test(str);
    if (validar) return true;
    return false;
  }
);

console.log(isNumeric("3a"));
