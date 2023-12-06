let vetorIdade = []
let vetorPeso = []
let vetorAlturas = []

function coletarInformacoes() {
    for (let i = 0; i < 1; i++) {
      let idade = parseInt(prompt(`Digite sua idade`))
      let peso = parseInt(prompt(`Digite seu peso`))
      let alturas = Number(prompt(`Digite sua altira`))
      vetorAlturas.push(alturas)
      vetorPeso.push(peso)
      vetorIdade.push(idade)
    }
}

coletarInformacoes()

function estaticasIdadeEaltura() {
  let contarEstaticas = 0;
  const limitePeso = 90;
  const limiteAltura = 1.5;
  for (let i = 0; i < vetorPeso.length; i++) {
    for (let j = 0; j < vetorAlturas.length; j++) {
      if (vetorPeso[i] >= limitePeso && vetorAlturas[j] <= limiteAltura) {
        ++contarEstaticas;
      }
    }
  }
  return contarEstaticas;
}


function mediaIdade() {
  let somarIdade = 0;
  for (const i in vetorIdade) {
    somarIdade += vetorIdade[i];
  }
  let mediaIdade = somarIdade / vetorIdade.length;
  return mediaIdade;
}

function estaticasIdade() {
    let somarIdadesEntre10E30 = 0
    for (const i in vetorIdade) {
        if (vetorIdade[i] >= 10 && vetorIdade[i] <= 30) {
          ++somarIdadesEntre10E30    
        }
    }
    return somarIdadesEntre10E30
}

function obterPorcentagem() {
    const porcentagem = (estaticasIdade() * vetorIdade.length) /100
    return porcentagem
}
console.log(`A media das idades e ${mediaIdade()}`);
console.log(`O numero total de pessoas com altura de 1.50 e altura acima de 1.50 e ${estaticasIdadeEaltura()}`);
console.log(`A % de idades entre 10 e 30 e de ${obterPorcentagem()}`);