const adivinharNumero = () => {
  const gerarNumeroAleatorio = Math.floor(Math.random() * 10);
  for (let j = 0; j < 4; ++j) {
    const adivinhaNumero = Number(prompt("Digite um numero de 0 a 9"));
    if (adivinhaNumero === gerarNumeroAleatorio) {
      alert(`voce acertou, parabens`);
      break;
    } else {
      alert(`Voce usou ${j + 1} das 4 tentativas`);
    }
  }
};
adivinharNumero();
