const contarVogais = () => {
  const vogais = ["a", "e", "i", "o", "u"];
  let contador = 0;
  const digite = prompt("Digite uma palavra");
  const array = Array.from(digite);
  for (let j = 0; j < array.length; j++) {
    if (vogais.includes(array[j])) {
      ++contador;
    }
  }

  alert(`existe ${contador} vogais`);
};

contarVogais();
