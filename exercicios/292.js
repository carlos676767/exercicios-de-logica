const contarValores = () => {
    let contadorDentro = 0;
    let contadorFora = 0;
  
    for (let i = 0; i < 10; i++) {
      const valor = parseInt(prompt(`Digite um valor de 0 a 20`));
  
      if (valor >= 0 && valor <= 20) {
        contadorDentro++;
      } else {
        contadorFora++;
      }
    }
  
    alert(`O total de valores dentro do intervalo de 0 a 20 é: ${contadorDentro}.
    O total de valores fora do intervalo de 0 a 20 é: ${contadorFora}`);
  };
  
  contarValores();
  
