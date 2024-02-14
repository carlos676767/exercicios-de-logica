//metodos em ts revisao

//indexOf

const verificarElemento = () => {
    const array: number[] = [10,4,7,8,9,10]
    const indic = array.indexOf(10)
    if (indic != -1) {
        console.log(`o elemento se encontra na posicao ${indic}`);
    }else{
        console.log(`o elemento nao se encontra`);
    }
}

verificarElemento()


//push
const addElementosArray = () => {
    const array: number[] = []
    array.push(10,5)
    console.log(array);
    
}

addElementosArray()

//pop e
const tirarUltimoElemento = () => {
  const list: number[] = [10, 4, 25, 870];
  const tirarElemento = list.pop();
  console.log(tirarElemento);
  console.log(list);
};

tirarUltimoElemento();

//metodo shift
const tirarPrimeiroElemto = () => {
  const array: number[] = [25, 80, 90, 7, 79];
  const removerPrimeiroEoemento = array.shift();
  console.log(removerPrimeiroEoemento);
  console.log(array);
};

tirarPrimeiroElemto()

const addElementoNaPrimeira = () => {
  const list: number[] = [10, 40];
  const addNoInicio = list.unshift(100, 20);
  console.log(addNoInicio);
  console.log(list);
};
addElementoNaPrimeira();