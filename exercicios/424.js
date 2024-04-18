function highestRank(arr) {
  let contador = {};
  for (let j = 0; j < arr.length; j++) {
    if (!contador[arr[j]]) {
      contador[arr[j]] = 1;
    } else {
      ++contador[arr[j]];
    }
  }
  let pegarMaiorValorContado = null;
  let retornarValorDeAcordoComContados = null;
  
  for (let i in contador) {
    if (contador[i] > pegarMaiorValorContado) {
      pegarMaiorValorContado = contador[i];
      retornarValorDeAcordoComContados = i;
    }
  }
  console.log(`o numero que aparece mais vezes e o ${retornarValorDeAcordoComContados} que aparece ${pegarMaiorValorContado} vezes`);
}

const numeros = [12, 10, 8, 12, 7, 6, 4, 10, 12, 20, 20, 20, 20, 20]; //12 aparece 3 veazes e 10 duas vezes
highestRank(numeros);
