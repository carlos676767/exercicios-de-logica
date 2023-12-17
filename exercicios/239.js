let array =[]
let arrayDeFilhos = []
function prefeitura() {
  while (true) {
    let salario = parseInt(prompt(` Digite seu salario`));
    let filhos = parseInt(prompt(`Digite o numero de filhos`));
    array.push(salario)
    arrayDeFilhos.push(filhos)
  
    let parar = prompt(`S/N`)
    if (parar  === `s`) {
      break;
    }
  }


}

prefeitura();



function media() {
  let somar = 0
  for (let i = 0; i < array.length; i++) {
    somar += array[i];
  }
  let media = somar / array.length;
  console.log(`A media de salarios e de ${media}`);
}

media()


function numerosDefilhos() {
    let somar = 0
    for (let i = 0; i < arrayDeFilhos.length; i++) {
        somar+=arrayDeFilhos[i]
    }
    let media = somar/ arrayDeFilhos.length
    console.log(`a media de filhos e ${media}`)
}





numerosDefilhos()



function maior() {
    let maior = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
        
    }

    console.log(`o maior salario e ${maior}`);
}

maior()

function saberSalario() {
    let pessoas = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 150) {
            ++pessoas
        }
    }

    const porcentagem = (array.length / 100) * pessoas
    console.log(`A % de pessoas que ganham ate 150 e de ${porcentagem}`);
}