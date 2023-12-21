function retornarIdade(idade) {
  if (idade <= 5 && idade <= 7) {
    return `infantil a`;
  } else if (idade >= 8 && idade <= 10) {
    return `Infantil B`;
  } else if (idade >= 11 && idade <= 13) {
    return `Juvenil A`;
  } else if (idade >= 14 && idade <= 17) {
    return `Juvenil B`;
  } else if (idade >= 18) {
    return `adulto`;
  }
}

let idade1 = parseInt(prompt(`Digite sua idade`));
alert(retornarIdade(idade1));
