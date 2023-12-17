function perguntas() {
  let sim = 0;
  let nao = 0;
  let contarMulheres = 0
  for (let i = 0; i < 10; i++) {
    const pergunta = prompt(`Voces queremn um novo produto?`);
    let sexo = prompt(`Digite seu sexo`)

    if (sexo === `mulher` && pergunta === `sim`){
        ++contarMulheres
    }

    
    switch (pergunta) {
      case `sim`:
        ++sim;
        break;
      case `nao`:
        ++nao;
        break;
      default:
        alert(`Digite uma opcao correta.`);
        break;
    }
  }

  return {
    sim,
    nao,
    contarMulheres,

  };
}

const resultado = perguntas()
console.log(`as pessoas que digitaram sim foi ${resultado.sim}`);
console.log(`as pessoas que digitaram nao foi ${resultado.nao}`);
console.log(`O numero de mulheres que disse ${resultado.contarMulheres}`);
