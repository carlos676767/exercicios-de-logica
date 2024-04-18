const pegarPalindromos = () => {
  const lista = ["radar", "casa", "reger", "osso", "programacao"];
  const copiarArray = lista.slice().reverse();
  const palindromos = [];
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] === copiarArray[j]) {
      palindromos.push(lista[j]);
    }
  }
  console.log(palindromos);
};

pegarPalindromos();
