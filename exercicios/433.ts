const obterAssentos: string[] = [];
const criarAssentos = (): void => {
  for (let i = 0; i <= 15; ++i) {
    const quantidadeAssentos = Math.floor(Math.random() * 96) + 1;
    const alfabeto: string[] = Array.from("abcdefghijklmnopqrstuvwxyz");
    const indiceAlfabeto = Math.floor(Math.random() * alfabeto.length);
    const obterAlfabeto = alfabeto[indiceAlfabeto].toUpperCase();
    const assentos = obterAlfabeto + quantidadeAssentos;
    obterAssentos.push(assentos);
  }
};

criarAssentos();

const armazenarReservasAssentos: string[] = [];

const reservarAssentos = (): void => {
  while (true) {
    const assentosSelecionados: string | null = prompt(
      `[SBSO - Airport regional]Qual assento voce deseja reservar?, assentos disponíveis: ${obterAssentos}`
    );
    for (let i = 0; i < obterAssentos.length; ++i) {
      if (assentosSelecionados != null) {
        if (assentosSelecionados.includes(obterAssentos[i])) {
          const reservarAssento = obterAssentos.splice(i, 1);
          armazenarReservasAssentos.push(reservarAssento[i]);
          alert(`Voce reservou o assento ${reservarAssento}`);
        }
      }
    }
    voosAgendados();
    if (confirm("Deseja encerrar o programa ?")) {
      return;
    }
  }
};

const voosAgendados = (): void => {
  const reservasFeitas = prompt("Deseja ver suas reservas feitas ?");
  switch (reservasFeitas) {
    case "sim":
      if (armazenarReservasAssentos.length === 0) {
        alert("Voce ainda nao fez nenhuma reserva de voo.");
      } else {
        alert(
          `Suas reservas feitas de voos foram ${armazenarReservasAssentos}`
        );
      }
      break;
  }
};

reservarAssentos();
