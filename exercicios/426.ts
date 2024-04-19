const encontrarPares = () => {
  const armazenarValoresPegos: string[] = [];
  const pares: number[] = [];
  while (true) {
    const numeros: string | null = prompt("digite uma lista de numeros");
    numeros != null ? armazenarValoresPegos.push(numeros) : null;
    const continuar = confirm("Deseja continuar ?");
    if (!continuar) {
      if (numeros != null) {
        const converterValores: number[] = armazenarValoresPegos.map(Number);
        for (let i = 0; i < converterValores.length; ++i) {
          if (converterValores[i] % 2 == 0) {
            pares.push(converterValores[i]);
            console.log(pares);
          }
        }
      }
      break;
    }
  }
};

encontrarPares();
