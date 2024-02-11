/*Escreva um programa que receba uma string do usuário e substitua todas as vogais por "*" (asterisco)*/

const substituirVogais = () => {
  const nome: string = `carlos`; // a, o
  const converterEmArray = nome.split(``);
  const arrayDeVogais: string[] = [`a`, `i`, `o`, `u`];
  const novoArray: string[] = [];
  for (let i = 0; i < converterEmArray.length; ++i) {
    if (arrayDeVogais.includes(converterEmArray[i])) {
      novoArray.push(`*`);
    } else {
      novoArray.push(converterEmArray[i]);
    }
  }
  const novoNome = novoArray.join(``);
  console.log(novoNome);
};

substituirVogais();