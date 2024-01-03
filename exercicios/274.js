let pegarNumeros = []
const informacoes = () => {
    while (true) {
        const numeros = parseInt(prompt(`Digite um numero`))
        const parar = prompt(`Deseja parar ? [s], [n]`)
        pegarNumeros.push(numeros)
        if (parar === "s") {
            alert(`Programa encerrado com sucesso!`)
            alert(`Os numeros armazenados foram ${pegarNumeros}`)
            break
        }
    }
}
informacoes()

const somatorio = () => {
  let somar = 0;
  for (let i = 0; i < pegarNumeros.length; i++) {
    somar += pegarNumeros[i];
  }
  alert(`A soma de todos os numeros e de ${somar}`);
};

somatorio()

const mediaNumeros = () => {
  let somar = 0;
  for (let i = 0; i < pegarNumeros.length; i++) {
    somar += pegarNumeros[i];
  }
  let media = somar / pegarNumeros.length;
  alert(`A media de numeros e ${media}`);
};

mediaNumeros();

const pares = () => {
  let contador = 0;
  for (let i = 0; i < pegarNumeros.length; i++) {
    if (pegarNumeros[i] % 2 === 0) {
      ++contador;
    }
  }
  alert(`o total de numeros pares e ${contador}`)
};

pares()