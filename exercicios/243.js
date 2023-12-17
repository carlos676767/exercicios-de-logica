const sucessiva = () => {
  let array = [];
  while (true) {
    const numero = parseInt(prompt(`Digite um numero`));
    if (numero > 0) {
      array.push(numero);
    } else {
      console.log(`como o numero foi negativo programa encerrado`);
      break;
    }
  }

};

const duplicata = sucessiva()

function removerDuplicatas() {
    let duplicatas = new Set(duplicata)
    const novoValor = [...duplicatas]
    console.log(novoValor);
    return novoValor
}

const valorSemDuplicata = removerDuplicatas()

const indiceNumero = () => {
  let numero = parseInt(
    `Digite um numero para saber se ele se encontra em qual indice`
  );

  for (let i = 0; i < valorSemDuplicata.length; i++) {
   if (valorSemDuplicata[i] === numero) {
    console.log(`o indice do numero e ${i}`);
   } else{
    console.log(`o numero nao se encontra`);
   }
  }
}; 


indiceNumero()


