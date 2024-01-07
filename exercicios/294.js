let array = [];
const clima = () => {
  for (let i = 0; i <= 7; i++) {
    let climas = parseInt(prompt(`Digite o clima`));
    array.push(climas);
  }
};
clima();

const menorEmaioRtemperatura = () => {
    let maior = 1000
    let menor = 0
   for (let i = 0; i < array.length; i++) {
     if (maior > array[i]) {
            maior = array[i]
        }

        if (menor < array[i]) {
            menor = array[i]
        }
    
   }
    alert(`O numero maior e o ${menor}, o numero menor e o ${maior}`)
}



menorEmaioRtemperatura()

const tempAnualMedia = () => {
    let somar = 0
    for (let i = 0; i < array.length; i++) {
        somar+= array[i]
    }
    let media = somar/365
    alert(`a media e de ${media} anual`)
}

tempAnualMedia()