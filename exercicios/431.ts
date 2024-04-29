const gerarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10);
};

let tentativas: number = 4;

const adivinharNumero = () => {
  const numero = gerarNumeroAleatorio();
  while (true) {
    const pedirNumero: number = Number(prompt("Digite um numero de 0 a 9"));
    if (pedirNumero === numero) {
      alert(`O numero era ${pedirNumero}, parabens!`);
      break;
    } else {
      --tentativas;
      if (tentativas == 3) {
        alert(`Restam ${tentativas} tentativas`);
      } else if (tentativas == 2) {
        alert(`Restam ${tentativas} tentativas`);
      } else if (tentativas === 1) {
        alert(`Restam ${tentativas} tentativas`);
      } else {
        alert("voce perdeu.");
        break;
      }
    }
  }
};

adivinharNumero();
