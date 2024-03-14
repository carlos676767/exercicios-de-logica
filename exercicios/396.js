const pararSefor1 = () => {
  while (true) {
    let numero = prompt("Digite um valor");
    const converterStringEmnUMERO = parseInt(numero);
    for (let j = 0; j < converterStringEmnUMERO; j++) {
      somar += converterStringEmnUMERO[j];
    }
    const converterValorEmString = somar.toString()
    const pegarArray = converterValorEmString.split('')
    if (pegarArray.length == 1) {
      break;
    } else {
      alert("A soma do numero tem que ter apenas um numero.");
    }
  }
};

pararSefor1();
