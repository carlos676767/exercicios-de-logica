const retornarValorArray = () => {
  const list = [10, 4, 8, 8, 9];
  const retornarValor = list.at(0); // recebe a posicao e retorna um valor

  let achado = false;
  if (retornarValor != undefined) {
    achado = true;
    console.log(achado, retornarValor);
  } else {
    achado = false;
    console.log(achado, retornarValor);
  }
};

retornarValorArray();

function retornarIndiceElemento() {
  const lista = ["maca", "banana", "uva"];
  const verPosicaoElemento = lista.indexOf("maca");
  if (verPosicaoElemento != -1) {
    console.log("o elemento se encontra na posicao", verPosicaoElemento);
  } else {
    console.log("o elemento nao se encontra em nenyma posicao");
  }
}

retornarIndiceElemento();
