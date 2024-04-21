const converterNumeroEmBinario = (): void => {
  const numero: number = 12345;
  if (numero < 0) {
    console.log("Digite um valor maior que 0");
  } else if (isNaN(numero)) {
    console.log("Digite um numero e nao uma letra");
  } else {
    const converter: string = numero.toString(2);
    console.log(`O numero ${numero} em binario e ${converter}`);
  }
};

converterNumeroEmBinario();
